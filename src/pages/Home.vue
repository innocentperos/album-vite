<template>
  <div class="min-h-screen min-w-full  bg-slate-100 dark:bg-slate-800 relative pb-16 md:pb-3">
    
    <AppBar back>
      
      <template #actions>
        <IconButton text icon="bx-user text-2xl" />
      </template>
    </AppBar>
    <div class="space-y-4 p-2 pt-4">
      <TimelineItem  :key="i.id" v-for="i in items" :item="i" class="shadow">

      </TimelineItem>
    </div>
    
    <BottomNavigitor v-model="selectedTab">
      
    </BottomNavigitor>
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive, computed } from "vue"
  import router from "/router"

  import TimelineItem from "/src/pages/home/TimeLineItem.vue"
  
  import useTimelineStore from "/stores/timelineStore"
  import {random} from "/stores/random"
  
  const selectedTab = ref(0)
  const timelineStore = useTimelineStore()
  
  const items = timelineStore.multiple(getItemsId())
  
  function getItemsId(){
    let ids = []
    
    while(ids.length < 20 ){
      let id = random(100)
      if(!ids.includes(id)){
        ids.push(id)
      }
    }
    
    return ids;
  }
  
  
</script>
