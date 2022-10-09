import { defineStore } from 'pinia'
import { ref, computed, reactive } from "vue"
import { random, randomText, randomArray } from "./random"

import albumProvider from "/providers/album"


function generateAlbum(id) {
  return {
    id,
    title: randomText(2),
    covers: randomArray(random(50) + 1, 11, 0),
    features: Array.randomArray(random(8), 50, 0),
    featured: random(60) % 10 == 0
  }
}

const useStore = defineStore('albumStore', {
  // arrow function recommended for full type inference
  state: () => {

    
    const albums = reactive({})
    const loading = ref(false)

    async function _getAlbum(id) {
      // Get  album
      try {
        let album = await albumProvider.getAlbum(id)
        
        addAlbum(album)
      }catch(error){
        
        albums[id].error = true
      }
    }

    function addAlbum(album) {
      let { id } = album
      albums[id] = album
      return true
    }

    function getAlbum(id) {
      if (!albums[id]) {
        albums[id] = { loading: true }
        _getAlbum(id)
      }

      return computed(() => albums[id])
    }

    return {
      albums,
      loading,

      addAlbum,
      getAlbum,
      get: generateAlbum
    }
  },
})

export default useStore;
