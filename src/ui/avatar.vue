<template>
  <div class=" rounded-full  overflow-hidden flex" :class="classes">
    <Image class="w-full h-full object-cover" :src="props.src" alt=""/>
  </div>
</template>

<script setup>
  import Image from "/src/ui/Image.vue"
  
  import {onMounted, computed} from "vue"
  const props = defineProps({
    src:String,
    small:Boolean,
    normal:{
      type:Boolean,
      default: true
    },
    large: Boolean
  })
  
  const size = computed(function(){
    if(props.large == true) return "h-32 w-32"
    if(props.small == true) return "h-16 w-16"
    return "h-24 w-24"
  })
  
  const classes = computed(function(){
    let c ={}
    
    c[size.value] = true;
    
    return c;
  })
</script>
