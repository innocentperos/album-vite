<template>
  <div class=" rounded-full  overflow-hidden flex " :class="classes">
    <Image class="w-full h-full object-cover" :src="props.src" alt=""/>
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
    if(props.large == true) return "h-32 w-32"
    if(props.small == true) return "h-16 w-16"
    
    if(props.xsmall == true) return "h-12 w-12"
    
    if(props.tiny == true) return "h-8 w-8"
    return "h-24 w-24"
  })
  
  const classes = computed(function(){
    let c = {
      "border border-[2px] border-indigo-500 dark:border-indigo-900 dark:ring-[1px] dark:ring-white/20" : props.history
    }
    
    c[size.value] = true;
    
    return c;
  })
</script>
