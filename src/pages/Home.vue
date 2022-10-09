<template>
  <div class="md:pl-16 min-h-screen min-w-full  bg-slate-100 dark:bg-slate-800 relative pb-16 md:pb-3">
    
    <AppBar back>
      
      <template #actions>
        <IconButton text icon="bx-user text-2xl" />
      </template>
    </AppBar>
    <div class="space-y-4 p-2 pt-4">
      <TimelineItem  :key="id" v-for="{id} in posts" :id="id" class="shadow">

      </TimelineItem>
    </div>
    
    <BottomNavigator v-model="selectedTab" />
      
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive, computed, watch } from "vue"
  import useStore from "/stores/post"
  import router from "/router"
  import {getPosts} from "/providers/album-post"
  
  
  import TimelineItem from "/src/pages/home/TimeLineItem.vue"
  
  
  const selectedTab = ref(0)
  const store = useStore()
  
  const posts = store.posts
  
  
  async function init(){
    try{
      let posts = await getPosts()
      posts.forEach(post=>{
        store.add(post)
      })
    }catch(error){
      
    }
  }
  init()
  watch(store.posts, function(){
    console.log(Object.keys(store.posts))
  })
  
</script>
