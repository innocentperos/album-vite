import { defineStore } from 'pinia'
import {ref, computed, reactive} from "vue"
import {random} from "./random"

/**
 * id:int,
 * user:id,
 * photos: int,
 * feature: [int]
 * comments: int
 * reactions: int
 * 
 */
 
 function randomItem(id){
   let features = []
   let max = random(6)
   for(let i = 0; i<max; i++){
     features.push(random(50))
   }
   
   return {
     id:id,
     user: random(50),
     photos: random(16)+1,
     comments: random(3000),
    reactions: random(3000),
    features
   }
 }
 
 const useTimelineStore = defineStore('timeItemsStore', {
  // arrow function recommended for full type inference
  state: () => {
    
    const items = reactive({})
    
    function get(id){
      if(items[id]){
        return items[id]
      }else{
        let item = randomItem(id)
        items[id] = item;
        return items[id]
      }
    }
    
    function multiple(ids){
      let result = ids.map(id=>get(id))
      return result;
    }
    
    function react(id){
      console.log(items[id], id)
      items[id].reactions ++;
    }
    function comment(id) {
      items[id].comments++;
    }
    
    return {
      items,
      get,
      multiple,
      react,
      comment
    }
  },
})

export default useTimelineStore;
