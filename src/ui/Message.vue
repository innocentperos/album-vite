<template>
  
  <div class=" p-2 w-full flex" :class="containerStyles(send)">
    
    <div class="shadow bg-gradient-to-br p-3 rounded-xl text-white" :class="bubbleStyles(send)">
      <span class="tracking-tight">
        {{randomText(random(50)+1)}}
      </span>
      <span class="inline-block p-2 float-right font-bold text-sm italic flex items-center space-x-1">
        <span>12:50</span>
        <Icon strip v-if="send && !loading" icon="bx-check-double inline-flex text-white text-2xl float-right"></Icon>
        <div v-if="send && loading" class="inline-block h-4 aspect-square rounded-full border-2 border-slate-100/50 border-t-indigo-700 animate-spin">
          
        </div>
      </span>
    </div>
  </div>
</template>
<script setup>
  import {randomText, random} from "/stores/usersData"
  
  const send = random(10)%2 == 1
  const loading = random(26)%2 ==0
  function containerStyles(type){
    return {
      "pr-16":!type,
      "pl-16 justify-end":type,
    }
  }
  function bubbleStyles(type){
  return {
    "rounded-br-none from-indigo-500 to-indigo-700 ": type,
    "rounded-bl-none from-slate-500 to-slate-700":!type
  }
  }
  
</script>
