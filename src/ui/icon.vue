<template>
  <span :class="styles">
    
  </span>
</template>

<script setup>
  import {computed} from "vue"
  
  const props = defineProps({
    icon: String,
    strip: {
      type:Boolean,
      default:false
    }
  })
  
  const styles = computed(function(){
    let s =  {
      'flex aspect-square items-center justify-center bx':true,
      'dark:text-white text-black hover:text-indigo-700 dark:hover:text-indigo-300': !props.strip
    }
    s[props.icon] = true;
    
    return s;
  })
</script>
