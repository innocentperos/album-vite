<template>

  <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
    <label v-if="props.label" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      {{props.label}}
    </label>
    <div class="group appearance-none block w-full  border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-12 flex relative overflow-hidden durstion-200" id="grid-first-name" :class="classes">
      
      
      <input :value="props.modelValue" @input="changed" class="bg-transparent outline-none w-full h-full" :class="input_classes" :type="props.type" :placeholder="props.placeholder ?props.placeholder : props.label" >
      
      <div v-if='props.rightIcon' class="h-full aspect-square flex items-center justify-center absolute right-0 top-0 bg-transparent " :class="icon_classes">
        <span class="bx" :class="props.rightIcon"></span>
      </div>
      
      <div v-if='props.leftIcon' class="h-full aspect-square flex items-center justify-center absolute left-0 top-0 bg-transparent " :class="icon_classes">
        <span class="bx" :class="props.leftIcon"></span>
      </div>

    </div>
    
    <p v-if="!props.dense" :class="message_classes" class="text-xs mt-3">{{props.message}}</p>
  </div>
</template>

<script setup>
  import { ref, computed, toRefs } from "vue"

  const props = defineProps({
    modelValue: String,
    label:String,
    message:String,
    placeholder:String,
    error:Boolean,
    leftIcon:String,
    rightIcon:String,
    dense:Boolean,
    type:{
      type:String,
      default:"text"
    }
  })

  const $emit = defineEmits(["update:modelValue"])
  
  const error = computed(function(){
    return props.error
  })
  
  function changed(v) {
    $emit("update:modelValue", v.target.value)
  }

  const classes = computed(() => {
    return {
      "ring ring-transparent":true,
      " border-slate-700 border-slate-700 hover:ring-indigo-500/50 hover:border-indigo-500 bg-slate-50 text-slate-700 placeholder-slate-309": !error.value,
      "border-red-500 hover:ring-red-500/50 bg-red-50/50 text-red-500 placeholder-red-300": error.value
    }
  })
  const message_classes = computed(() => {

    return {
      "text-red-500 italize": error.value,
      "text-slate-700": error.value
    }
  })
  
  const input_classes = computed(() => {
  
    return {
      "pr-10": props.rightIcon,
      "pl-10": props.leftIcon
      
    }
  })
  
  const icon_classes = computed(function(){
    return {
      "bg-rose-500/20 text-rose-500 group-hover:bg-rose-500/20 group-hover:text-rose-500":error.value,
      "group-hover:text-blue-500 text-slate-500 text-md bg-slate-500/20 group-hover:bg-indigo-500/20":!error.value
    }
  })
  
</script>
