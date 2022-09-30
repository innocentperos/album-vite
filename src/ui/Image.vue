<template>
  <img v-if="ready" :src="props.src" :alt="props.alt">
  <div v-else class="h-full w-full bg-slate-300 animate-pulse">
    
  </div>
</template>

<script setup>

  import {ref, onMounted} from "vue"
  
  const props = defineProps({
    src:String,
    alt:String,
  })
  const ready = ref(false)
  onMounted( function(){
    let image = new Image()
    image.onload = function(t){
      ready.value = true
    }
    image.src = props.src;
  })
</script>
