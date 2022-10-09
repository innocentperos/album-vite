import { defineStore } from 'pinia'
import { ref, reactive, computed } from "vue"

import { getUser } from "/providers/user"
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

    
    async function loadUser(id){
      try {
        let _user = await getUser(id)
        users[id] = _user
      } catch (error) {
        users[id] = { loading: false, error: true }
      }
    }
    
    function _getUser(id, compute = true) {
      let user ;
      if (!users[id]) {
        users[id] = { loading: true }
        loadUser(id)
      }
      if(!compute) return user
      return computed(() => users[id])
    }
    
    function getUserAvatar(id){
      return AVATARS[id%9]
    }

    return {
      users,
      get: _getUser,
      getUserAvatar,
    }
  },
})

export default useUsersStore;
