<template>
  <div class="w-full md:pl-16">
    <AppBar class="" title="Albums">
      <template #actions>
        <IconButton icon="bx-sort text-2xl"></IconButton>
      </template>
    </AppBar>



    <div class="py-3 px-1 mb-16 ">
      <div v-if="loading" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-full w-full flex items-center justify-center bg-slate-300/60">
        <Spinner></Spinner>

      </div>
      <div v-else class="grid gap-y-3 gap-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-2">

        <AlbumItem v-for="{id} in albums" :key="id" :id="id" :index="id"></AlbumItem>

      </div>

    </div>

    <BottomNavigator v-model="selectedTap" fab="bx-plus" @fab="newAlbum" />

  </div>
</template>
<script setup>
  import UserAvatar from "/src/ui/UserAvatar.vue"
  import AlbumItem from "/src/pages/albums/AlbumItem.vue"
  import userAlbumStore from "/stores/albumStore.js"

  import { ref, computed , watch} from "vue"
  import { random } from "/stores/random"
  import router from "/router"
  
  import {getAlbums} from "/providers/album"
  const store = userAlbumStore()
  const selectedTap = ref(2)
  const loading = computed(()=>store.loading.value)
  const albums = store.albums
  
  function newAlbum() {
    router.push({
      name: "new-album"
    })
  }
  
  
  async function init(){
    try{
      let _albums = await getAlbums()
      //albums = _albums
      for(let i = 0; i<_albums.length; i++){
        let album = _albums[i]
        store.addAlbum(album)
      }
    }catch(error){
      console.error(error)
      alert("error occured")
    }
  }
  init()
  
</script>
