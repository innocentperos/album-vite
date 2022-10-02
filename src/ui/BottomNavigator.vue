<template>
  <IconButton v-if="fab" :loading="fabLoading" @click="fabClick" class="fixed mb-3 bottom-16 md:bottom-3 right-0 mr-3 z-10 w-16 h-16 aspect-square shadow-xl rounded-[50%]">
    <Icon strip :icon="fab + ' text-white text-2xl'"></Icon>
  </IconButton>
  
  <div class="fixed bottom-0 left-0 right-0 w-full h-16 bg-slate-100 dark:bg-slate-800 dark:shadow-[4px_1px_60px_-1px_rgba(0,0,0,0.43)] shadow-[4px_1px_60px_-1px_rgba(229,231,235,.93)]  flex items-center justify-between px-3 p-1 md:flex-col md:w-16 md:h-full md:justify-start md:z-20 md:shadow-none md:border md:border-transparent md:border-r-slate-600 ">

    <div v-for="icon,index in actions" :key="index" class=" h-full md:w-14 md:h-auto aspect-square flex items-center justify-center text-white rounded-xl duration-300 last:mt-auto" :class="bgStyle(index)">
      <IconButton @click="change(index)" :icon="icon + ' text-2xl hover:text-white'" text>
      </IconButton>

    </div>

  </div>
</template>

<script setup>
  import { ref, computed } from "vue"
  import router from "/router"
  
  const props = defineProps({
    'modelValue':Number|String,
    'fab':String,
    'fabLoading':Boolean
  })
  const emits = defineEmits(["update:modelValue",'fab'])
  
  function fabClick(e){
    e.stopPropagation()
    emits("fab", e)
  }
  
  const actions = [
    "bx-home",
    "bx-search",
    "bx-photo-album",
    "bx-message",
    "bx-power-off"
    ]

  const selected = computed(function(){
    return props.modelValue
  })

  function bgStyle(index) {
    return {
      "bg-indigo-700 text-white": selected.value == index,
      "bg-transparent dark:text-white text-black": selected.value != index,
    }
  }

  function iconStyle(index) {
    return {
      "text-white ": selected.value == index,

    }
  }
  
  const CHATS = 3;
  const HOME =0;
  function change(index) {
    if(selected.value==index) return
    
    emits("update:modelValue", index)
    
    if(index == CHATS){
      router.push({
        name:"chats"
      })
    }else if(index == HOME){
      router.push({
        name: "home"
      })
    }
  }
</script>
