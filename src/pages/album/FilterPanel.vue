<template>
  <div @click="emits('update:modelValue',false)" class="fixed z-20 left-0 top-0 bottom-0 right-0 h-screen w-screen bg-black/50 backdrop-blur-xs">

  </div>
  <div  class="z-20 min-h-64 md:h-screen w-full md:w-1/3 fixed top-0 z-20 mt-16 left-0 md:left-auto right-0 bg-slate-100 dark:bg-slate-800 py-3">

    <div class="w-full flex flex-col ">

      <div v-if="features.length >0" class="flex flex-col overflow-auto py-2 pb-3 space-y-2 pr-10">
        <div v-for="row in maxRow" :key="row" class="flex space-x-2 w-full px-3" :class="{'ml-10':row%2==0}">
          <UserAvatar @click="select(getUser(row,col))" :ring="selected[getUser(row,col)]" xsmall :user-id="getUser(row,col)" :key="index(row,col)" v-for="col in colCount(row)" :class="{'scale-110':selected[getUser(row,col)]}"></UserAvatar>
        </div>
      </div>
      <div v-if="features.length >0" class="h-full w-full  p-3" style="flex-grow: 1 ">
        <ButtonGroup :items="['all inside','any inside']" />
      </div>

      <div class="px-3 pr-0 flex">
        <IconButton icon="bx-calendar text-xl"></IconButton>
        <div class="w-full overflow-x-auto flex ml-1">
          <div v-for="i in 30" class="first:ml-2 mr-2 h-full rounded-full px-3 pr-0 text-sm bg-white dark:text-white dark:bg-slate-600 shrink-0 grow-0 tracking-wider flex items-center justify-center">
            <spab>22 sept</spab>
            <IconButton text class="text-xl" icon="bx-x"/>
          </div>
        </div>
      </div>

      <div class=" w-full p-3">
        <Button class="flex" block>
          <Icon strip class="text-white" icon="bx-filter text-xl"></Icon>
          <span class="mx-auto">Filter</span>
        </Button>
      </div>
    </div>
  </div>

</template>

<script setup>
  import { random, uniqueArray } from "/stores/random"
  import useAlbumStore from "/stores/albumStore"
  import useUserStore from "/stores/users"

  import { ref, reactive } from "vue"

  const selected = reactive({})
  const props = defineProps({
    "albumId": Number,
    "modelValue": Boolean
  })

  const emits = defineEmits([
    "update:modelValue"
  ])

  const albumStore = useAlbumStore()

  const album = albumStore.getAlbum(props.albumId)


  const features = album.value.features

  function select(id) {

    if (selected[id]) {
      selected[id] = false
    } else {
      selected[id] = true
    }
  }

  // Calculate the number of row to use to display the featured users 
  const maxRow = Math.ceil(features.length / 10)

  // Return the number of users remaining to be displayed for thr row,
  function colCount(row) {
    if (features.length < 10) return features.length

    const diff = features.length - row * 10
    return Math.min(10, diff)
  }

  function index(row, col) {
    // Returns the correct index of the user id in the featured array
    return (row - 1) * 10 + col - 1
  }

  function getUser(row, col) {
    return features[index(row, col)]
  }
</script>
