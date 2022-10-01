<template>
  <div class="fixed bottom-0 left-0 right-0 w-full h-16 bg-slate-100 dark:bg-slate-800 dark:shadow-[4px_1px_60px_-1px_rgba(0,0,0,0.43)] shadow-[4px_1px_60px_-1px_rgba(229,231,235,.93)]  flex items-center justify-between px-3 p-1">

    <div v-for="icon,index in actions" :key="index" class=" h-full aspect-square flex items-center justify-center text-white rounded-xl duration-300" :class="bgStyle(index)">
      <IconButton @click="change(index)" :icon="icon + ' text-2xl hover:text-white'" text>
      </IconButton>

    </div>

  </div>
</template>

<script setup>
  import { ref, computed } from "vue"
  const actions = [
    "bx-home",
    "bx-search",
    "bx-sun",
    "bx-message"
    ]

  const selected = ref(0)

  function bgStyle(index){
    return {
      "bg-indigo-700 text-white":selected.value == index,
      "bg-transparent dark:text-white text-black":selected.value != index,
    }
  }

  function iconStyle(index) {
    return {
      "text-white ": selected.value == index,

    }
  }

  function change(index) {
    selected.value = index
  }
</script>
