<template>
  <div class="min-h-screen min-w-full pt-16 bg-slate-100 dark:bg-slate-800">

    <div class="z-10 fixed top-0 left-0 min-h-16 py-3 bg-inherit dark:bg-slate-800 dark:text-white -50 border border-transparent shadow-slate-100/60 dark:shadow-lg shadow-slate-800/60 w-full flex items-center px-2">
      <span class="text-lg">Time line</span>

      <div class="ml-auto ">
        <IconButton icon="bx-user text-2xl"/>
      </div>
    </div>

    <div class=" space-y-4 p-2 ">
      <TimelineItem :key="i" v-for="i in 10" class="shadow">

      </TimelineItem>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive, computed } from "vue"
  import router from "/router"

  import TimelineItem from "/src/pages/home/TimeLineItem.vue"
</script>
