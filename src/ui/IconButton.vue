<template>
  <div :class="classes">
    
    <slot>
      <Icon :icon="props.icon" strip></Icon>
    </slot>
  </div>
</template>

<script setup>
  import {ref,computed} from "vue"
  
  const props = defineProps({
    icon:String,
    text:Boolean
  })
  
  const classes = computed(function(){
    let classs ={
      'h-10 ring ring-transparent aspect-square duration-300':true,
      'text-white bg-indigo-700 rounded-md hover:ring-indigo-800/40':!props.text,
      'text-dark dark:text-white hover:text-indigo-500 hover:dark:text-indigo-300':props.text
    }
    
    return classs;
  })
</script>
