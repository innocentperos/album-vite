<template>
  <div class="relative group shrink-0 grow-0 ">
    <Avatar v-bind="props"/>
    
    <div class="h-5 absolute aspect-square bg-indigo-700 rounded-full right-0 bottom-0 shadow-lg">
    </div>
    
  </div>
</template>
<script setup>
  const props = defineProps({
    src:{
      type:String,
      default:"/images/avatar3.jpg"
    },
    small:Boolean,
    xsmall:Boolean,
    tiny:Boolean,
    size:Number | String,
    history: Boolean,
    normal:{
      type:Boolean,
      default: true
    },
    large: Boolean
  })
  
</script>
