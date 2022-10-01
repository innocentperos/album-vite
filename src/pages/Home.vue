<template>
  <div class="min-h-screen min-w-full pt-16 pb-16 bg-slate-100 dark:bg-slate-800">
    
    <AppBar back>
      
      <template #actions>
        <IconButton text icon="bx-user text-2xl" />
      </template>
    </AppBar>
    <div class="space-y-4 p-2 pt-4">
      <TimelineItem  :key="i" v-for="i in 10" class="shadow">

      </TimelineItem>
    </div>
    
    <BottomNavigitor>
      
    </BottomNavigitor>
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive, computed } from "vue"
  import router from "/router"

  import TimelineItem from "/src/pages/home/TimeLineItem.vue"
</script>
