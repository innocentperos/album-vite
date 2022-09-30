<template>
  <div @click="toggle" class="w-5 aspect-square flex items-center justify-center shrink-0 grow-0" :class="classes">
    <span v-if="value" class="bx bx-check text-3xl text-white"></span>

  </div>
</template>

<script setup>
  import {ref,computed, onMounted} from "vue"
  
  const props = defineProps({
    modelValue:Boolean
  })
  const $emit = defineEmits(["update:modelValue"])
  const value = ref(false)
  
  onMounted(function(){
    value.value = props.modelValue
  })
  
  function toggle(e){
    value.value = !value.value
    $emit("update:modelValue", value.value)
    e.stopPropagation()
  }
  
  const classes = computed(function(){
    return {
      "rounded-sm ring ": true,
      "bg-indigo-700 ring-indigo-400/20":value.value,
      "bg-transparent border-2 border-slate-400 ring-transparent":!value.value
    }
  })
  
</script>
