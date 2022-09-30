import { defineStore } from 'pinia'
import {ref} from "vue"

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    
    const count = ref(0)
    
    function increment (){
      count.value++;
    }
    
    return {
      count,
      increment
    }
  },
})
