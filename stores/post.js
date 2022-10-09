import { getPosts } from "/providers/album-post.js"

import { defineStore } from 'pinia'
import { ref, reactive, computed } from "vue"

const useStore = defineStore('storeId', {
      // arrow function recommended for full type inference
      state: () => {

        const posts = reactive({})

        function addPost(post) {

          posts[post.id] = post
          //alert(posts[post.id].id)
      }

    function getPost(id) {

      if (posts[id]) return computed(() => posts[id])

      return computed(() => { loading: true })
    }

    return {
      posts,
      get: getPost,
      add: addPost
    }
  },
})


export default useStore;
