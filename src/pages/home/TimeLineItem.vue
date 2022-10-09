<template>
  <div class="w-full p-4 flex flex-col dark:bg-gradient-to-br bg-white dark:from-indigo-600 dark:to-indigo-800 dark:via-indigo-700 rounded-lg dark:text-white w-full">
    <div class="flex space-x-2 w-full">
      <UserAvatar :user-id="post.user" history xsmall class="shrink-0" />
      <div class="flex flex-col w-full mr-auto">
        <div class="flex flex-col-reverse items-center light:text-slate-700 w-full">
          <span class="text-sm mr-auto">6:30 am</span>
          <div v-if="user.loading || user.error" class="w-full h-4 flex space-x-2">
            <div class=" h-full bg-slate-300 dark:bg-slate-200 rounded-lg animate-pulse" :class="getWidth()"></div>
            <div class=" h-full bg-slate-300 dark:bg-slate-100 rounded-lg animate-pulse" :class="'w-[100px]'"></div>

          </div>

          <span v-else class="truncate font-bold tracking-wide text-lg mr-auto">{{user.first_name}} {{user.last_name}}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2 mt-4">
      <span class="text-sm tracking-wider">added {{covers.length}} pictures to
        <div @click="viewAlbum" class=" text-white bg-indigo-700 dark:bg-white dark:text-indigo-700 p-1 px-2 rounded-xl inline-flex items-center">
          <Icon strip class="bx bxs-collection text-md mr-1" />
          <span v-if="!album.loading">
            {{album.title}}
          </span>
          <div v-else class="h-2 w-16 rounded-full bg-slate-100  animate-pulse">
            
          </div>
        </div>
      </span>
      <span class="text-sm tracking-wider my-2 border-2 border-transparent border-l-slate-300 pl-2 ">
        {{post.description}}
      </span>
      <div class="grid gap-1" :class="gridSize">
        <div v-for="cover in covers" :key="cover.id" class="w-full aspect-square ring ring-indigo-700/0 duration-300 hover:ring-indigo-700/50 rounded-sm overflow-hidden">
          <Image class="w-full h-full object-cover" :src="url+cover.file" alt="" />
        </div>
      </div>
    </div>

    <div class="pt-2 flex items-center ">
      <div v-if="features && features.length > 0" class="p-1 bg-slate-700 rounded-full overflow-x-auto">
        <div class="flex -space-x-5 hover:space-x-0">
          <UserAvatar class="shadow rounded-full last:border-none duration-300" :key="n" v-for="n in features" :user-id="n" tiny />
        </div>

      </div>
      <div v-if="reactions" class="p-1 rounded-md ml-auto flex items-center light:text-white  ">
        <span class="text-md tracking-wide pt-1 px-1">{{reactions}}</span>
        <IconButton @click="react" text icon="bx-like" class="text-2xl font-light dark:text-white " />

      </div>

      <div v-if="comments" class="p-1 flex items-center ml-2">
        <span class="text-md tracking-wide pt-1 px-1">{{comments}}</span>

        <IconButton @click="comment" text icon="bx-chat" class="text-2xl font-light" />
      </div>

    </div>
  </div>
</template>
<script setup>
  import usePostStore from "/stores/post"
  import useUserStore from "/stores/users"
  import useAlbumStore from "/stores/albumStore"
  import {URI} from "/axios"
  import router from "/router"
  import { ref, computed, onMounted } from "vue"
  const url = URI
  const store = usePostStore()
  const userStore = useUserStore()
  const albumStore = useAlbumStore()

  const props = defineProps({
    id: Number
  })

  const post = store.get(props.id)

  const covers = computed(() => {
    if (post.value.covers) return post.value.covers

    return []
  })

  const features = computed(() => {
    if (post.value.features) return post.value.features
    return []
  })

  const album = albumStore.getAlbum(post.value.album)

  const user = userStore.get(post.value.user)

  const comments = computed(function() {
    let n = 1

    if (n / 1000 > 1) {
      return Math.floor(n / 1000) + "k"
    }

    return n;
  })

  const reactions = computed(function() {
    let n = 1

    if (n / 1000 > 1) {
      return Math.floor(n / 1000) + "k"
    }
    return n;
  })

  const gridSize = computed(function() {
    let count = covers.value.length
    if (count == 1) return 'grid-cols-1'
    if (count == 2) return 'grid-cols-2'
    if (count == 3) return 'grid-cols-3'

    if (count >= 4) return 'grid-cols-4'

    return 'grid-cols-' + count


  })

  function cover(id) {
    return AVATARS.random()
  }

  function react() {
    //store.react(item.value.id)
  }

  function comment() {
    //store.comment(item.value.id)
  }

  function getWidth() {

    let width = [`w-16`]

    return width
  }
  
  function viewAlbum(){
    router.push({
      name:"view-album",
      params:{
        id: album.value.id
      }
    })
  }
</script>
