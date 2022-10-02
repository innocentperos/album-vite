<template>
  <div class="z-10 top-0 left-0 min-h-16 py-3 dark:bg-slate-800 bg-slate-100 dark:text-white -50 border border-transparent shadow-slate-100/60 shadow-xs dark:shadow-lg shadow-slate-800/60 dark:shadow-slate-800/30 w-full flex items-center px-2" :class="classes">
    
    <IconButton @click="goback" v-if="icon" text  :icon="icon +' text-2xl'" class="mr-3 ml-1">
    </IconButton>

    <span class="text-lg font-bold">{{title}}</span>

    <div class="ml-auto ">
      <slot name="actions">
        
      </slot>
      
    </div>
  </div>

</template>

<script setup>
import {computed} from "vue"
import router from '/router'
  const props = defineProps({
    title: {
      type: String,
      default: "Album"
    },
    mainIcon:String,
    back:Boolean
  })
  const icon = computed(function(){
    if(props.mainIcon) return props.mainIcon
    
    if (props.back && !props.mainIcon)
      return "bx-left-arrow-alt"
      
    return undefined;
    
  })
  
  const classes = computed(function(){
    return {
      "sticky top-0":true
    }
  })
  const emits = defineEmits(['main'])
  
  function goback(e){
    e.stopPropagation()
    if(props.back){ 
      router.go(-1)
      return
      }
    emits("main", e)
  }
  
</script>
