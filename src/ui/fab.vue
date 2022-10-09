<template>
      <button @click="click" class="fixed right-3 bottom-3 rounded-full h-16 aspect-square flex items-center justify-center bg-indigo-600 duration-300 ring ring-indigo-500/0 hover:ring-indigo-600/50">
      <Icon :icon="icon" strip class="text-3xl dark:text-white text-white"/>
    </button>

</template>
<script setup>
  
  const props = defineProps({
    "icon":String,
    "propagate":Boolean
  })
  
  const emit = defineEmits([
    "click"
  ])
  
  function click(e){
    if(!props.propagate) e.stopPropagation()
    emit("click", e)
  }
</script>
