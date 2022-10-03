import { defineStore } from 'pinia'
import { ref, reactive, computed } from "vue"
import { random, randomName, AVATARS } from "./random"



function randomUser(id) {
  return {
    first_name: randomName(),
    last_name: randomName(),
    username: randomName(),
    id: id,
    avatar: AVATARS.random()
  }
}


export const useUsersStore = defineStore('usersStore', {
  // arrow function recommended for full type inference
  state: () => {
    const users = reactive({})
    
    function getUserAvatar(id){
      if(users[id]){
        return users[id].avatar;
      }else{
        return AVATARS.random()
      }
    }
    
    function getUser(id) {
      let user = users[id];
      if (!user) {
        user = randomUser(id)
      users[id] = user;
      
      }
      
      return computed(()=>users[id])

    }

    return {
      users,
      getUser,
      get: getUser,
      getUserAvatar,
    }
  },
})

export default useUsersStore;