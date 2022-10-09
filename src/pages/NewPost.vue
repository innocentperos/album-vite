<template>
  <div class="flex flex-col w-full h-screen overflow-auto">

    <AppBar back title="New Post">

      <template #subTitle>

        <div v-if="album.loading" class="h-2 w-16 rounded-full bg-slate-300 animate-pulse">

        </div>
        <span v-else>{{album.title}}</span>
      </template>

    </AppBar>

    <div class="w-full pt-2">

      <TextArea label="Message..." />

      <div class="w-full grid grid-cols-3 p-3 gap-2">
        <div v-for="file,index in files" :key="index" class="relative w-full aspect-square rounded-md bg-slate-200 text-slate-400 overflow-hidden flex flex-col items-center justify-center">
          <Image class="absolute h-full aspect-square object-cover" :src="getFileURI(file)">

          </Image>
          <IconButton small color="red" dump="bg-red-700" class="absolute right-3 bottom-3 shadow rounded-lg" icon="bx-trash" />
        </div>

        <div class="relative w-full aspect-square rounded-md bg-slate-200 border border-slate-300 dark:bg-slate-900 text-slate-400 dark:border-slate-600/60 flex flex-col items-center justify-center">

          <Icon strip icon="bx-upload " class="text-slate-400 text-2xl" />
          <span class="text-sm tracking-wider">upload</span>
          <input ref="input" class="absolute top-0 left-0 h-full w-full opacity-0" type="file" multiple>

        </div>
      </div>

    </div>
    <div class="p-3 mt-auto w-full bottom-0 bg-inherit">
      <Button block>
        Upload
      </Button>

    </div>
  </div>
</template>

<script setup>
  import router from "/router"
  import useAlbumStore from "/stores/albumStore"
  import { ref, reactive, onMounted } from "vue"

  const albumId = router.currentRoute.value.params.album

  const albumStore = useAlbumStore()

  const album = albumStore.getAlbum(albumId)

  const input = ref(null)
  const files = ref([])

  function getFileURI(file) {
    return URL.createObjectURL(file)
  }

  onMounted(function() {
    input.value.addEventListener("change", function() {
      for(let i = 0; i< input.value.files.length; i++){
        files.value.push(input.value.files[i])
      }
    })
  })
</script>
