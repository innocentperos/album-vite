<template>

  <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
    <label v-if="props.label" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      {{props.label}}
    </label>
    <div class="group appearance-none block w-full  border rounded py-3 px-1  leading-tight focus:outline-none focus:bg-white h-12 flex relative overflow-hidden durstion-200" id="grid-first-name" :class="classes">

      <div v-if='props.leftIcon' class="h-full pl-2 flex-shrink flex items-center justify-center bg-transparent " :class="icon_classes">
        <span class="bx" :class="props.leftIcon"></span>
      </div>


      <input :value="props.modelValue" @input="changed" class="bg-transparent outline-none w-full h-full mx-2 flex-grow" :class="input_classes " :type="props.type" :placeholder="props.placeholder ?props.placeholder : props.label">

      <div v-if='props.rightIcon' class="h-full pr-2 flex-shrink flex items-center justify-center bg-transparent " :class="icon_classes">
        <span class="bx" :class="props.rightIcon"></span>
      </div>


    </div>

    <p v-if="!props.dense" :class="message_classes" class="text-xs mt-3">{{props.message}}</p>
  </div>
</template>

<script setup>
  import { ref, computed, toRefs } from "vue"

  const props = defineProps({
    modelValue: String,
    label: String,
    message: String,
    placeholder: String,
    error: Boolean,
    leftIcon: String,
    rightIcon: String,
    dense: Boolean,
    type: {
      type: String,
      default: "text"
    }
  })

  const $emit = defineEmits(["update:modelValue"])

  const error = computed(function() {
    return props.error
  })

  function changed(v) {
    $emit("update:modelValue", v.target.value)
  }

  const classes = computed(() => {
    return {
      "ring ring-transparent duration-300": true,
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
      "mx-3": props.rightIcon,
      "mx-3": props.leftIcon

    }
  })

  const icon_classes = computed(function() {
    return {
      "bg-transparent group-hover:bg-transparent text-lg duration-300": true,
      "b-rose-500/20 text-rose-500 group-hover:bg-rose-500/20 group-hover:text-rose-500": error.value,
      "group-hover:text-indigo-700 text-slate-500 text-md b-slate-500/20 group-hover:b-indigo-700/20": !error.value
    }
  })
</script>
