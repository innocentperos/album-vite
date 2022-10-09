<template>
  <div class=" rounded-full  overflow-hidden flex relative" :class="classes">
    <Image class="w-full h-full object-cover top-0 left-0 absolute" :src="props.src" alt=""/>
  </div>
</template>

<script setup>
  import Image from "/src/ui/Image.vue"
  
  import {onMounted, computed} from "vue"
  const props = defineProps({
    src:{
      type:String,
      default:"/images/avatar3.jpg"
    },
    small:Boolean,
    xsmall:Boolean,
    tiny:Boolean,    
    xtiny:Boolean,
    size:Number | String,
    history: Boolean,
    normal:{
      type:Boolean,
      default: true
    },
    large: Boolean
  })
  
  const size = computed(function(){
    if(props.size) return `w-${props.size} h-${props.size}`
    if(props.large == true) return "h-32 md:h-32 md:w-32 w-32 border-[4px]"
    if(props.small == true) return "h-16 md:h-26 md:w-26 w-16 border-[3px]"
    
    if(props.xsmall == true) return "h-12 md:h-16 md:w-16 w-12 border-[3px]"
    
    if(props.tiny == true) return "h-8 w-8 md:h-12 md:w-12 border-[3px]"
    if(props.xtiny == true) return "h-6 md:w-10 md:h-10 w-6"
    return "h-24 w-24 border-[4px]"
  })
  
  const classes = computed(function(){
    let c = {
      "border border-transparent dark:ring dark:ring-transparent dark:ring-[1px] duration-300":true,
      "border-indigo-500 dark:border-indigo-700 dark:border-indigo-900 dark:ring-white/10" : props.history
    }
    
    c[size.value] = true;
    
    return c;
  })
</script>
