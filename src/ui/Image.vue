<template>
  <img v-if="ready" :src="src" :alt="props.alt" >
  <div :src="src" v-else class="h-full w-full bg-slate-300 animate-pulse">
  </div>
</template>

<script setup>

  import {ref, computed, watch, onMounted} from "vue"
  
  const props = defineProps({
    src:String,
    alt:String,
  })
  const ready = ref(false)
  
  const src = computed(()=>props.src)
  
  onMounted(function(){
    let image = new Image()
    image.onload = function(t) {
      ready.value = true
    }
    image.src = src.value;
  })
  watch(src, function(){
    let image = new Image()
    image.onload = function(t){
      ready.value = true
    }
    image.src = src.value;
  })
</script>
