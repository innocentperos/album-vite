<template>
  <button @click='clicked' :disabled="props.disabled" class="h-12 p-3  rounded-md text-white flex items-center justify-center text-sm select-none" :class='classes'>
    <slot v-if="!props.loading" ></slot>
    
    
    <div v-else class="h-full aspect-square border-2 border-slate-300/30 border-t-white rounded-full animate-spin">
      
    </div>
  </button>
</template>
<script setup>
  import {ref, computed} from "vue"
  
  const props = defineProps({
    block:Boolean,
    loading:Boolean,
    disabled:Boolean
  })
  
  const $emit = defineEmits(["click"])
  
  const classes = computed(()=>{
    return {
      "bg-gradient-to-br from-indigo-600 to-indigo-700 uppercase tracking-wider duration-300  p-3":true,
      "w-full": props.block,
      "focus:bg-indigo-900 focus:shadow-lg":!props.loading && !props.disabled,
      "bg-slte-500":props.disabled
    }
  })
  
  function clicked(e){
    if(props.loading || props.disabled) return 
    $emit("click", e);
  }
  
</script>
