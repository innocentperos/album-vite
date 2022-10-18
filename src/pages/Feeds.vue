<template>
  <div class="min-h-screen min-w-full  bg-slate-100 dark:bg-slate-800 relative md:pb-3">
    
    <AppBar title="Feeds" back>
      
      <template #actions>
        <IconButton text icon="bx-user text-2xl" @click="viewProfile"/>
      </template>
    </AppBar>
    <div class="space-y-4 p-2 pt-4">
      
      
      <TimeLineSkeloton v-if="loading" v-for="i in 4" :key="k" />
      <TimelineItem v-else :key="id" v-for="{id} in posts" :id="id" class="shadow">

      </TimelineItem>
      <Spinner class="border-4  mx-auto"></Spinner>
      
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive, computed, watch } from "vue"
  import useStore from "/stores/post"
  import Router from "/router"
  import {getPosts} from "/providers/album-post"
  
  
  import TimelineItem from "/src/pages/home/TimeLineItem.vue"
  
  import TimeLineSkeloton from "/src/pages/home/TimeLineItemSkeleton.vue"
  
  const selectedTab = ref(0)
  const store = useStore()
  const loading = ref(true)
  
  let posts = computed(function(){
    if(!store.posts) return []
    return store.posts
  })
  
  onMounted(function(){
    init().then(function(){
      
    })
    
  })
  
  async function init(){
    try{
      let posts = await getPosts()
      posts.forEach(post=>{
        store.add(post)
      })
    }catch(error){
      
    }finally{
      setTimeout(()=>{
        loading.value = false
      },3000)
    }
  }
  
  function viewProfile(){
    Router.push({
      name:"login",
      query:{
        redirect:"profile"
      }
    })
  }
</script>
