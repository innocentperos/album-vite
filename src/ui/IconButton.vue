<template>
  <button @click="click" :disabled="disabled" class="flex items-center justify-center" :class="classes">

    <div v-if="loading" :class="loaderStyles ">

    </div>
    <div v-else>
      <slot>
        <Icon :icon="props.icon" strip></Icon>
      </slot>

    </div>

  </button>
</template>

<script setup>
  import { ref, computed } from "vue"

  const props = defineProps({
    icon: String,
    text: Boolean,
    disabled: Boolean,
    loading: {
      type: Boolean,
      default: false
    }
  })

  const emits = defineEmits(["click"])

  const innerDisabled = ref(false)

  const disabled = computed(function() {
    return props.disabled || innerDisabled.value || props.loading
  })
  const classes = computed(function() {
    let classs = {
      'h-10 ring ring-transparent aspect-square duration-300': true,
      'text-white bg-indigo-700 rounded-md hover:ring-indigo-800/40': !props.text,
      'text-dark dark:text-white hover:text-indigo-500 hover:dark:text-indigo-300': props.text
    }

    return classs;
  })


  const loaderStyles = computed(function() {
    let style = {
      " h-6 aspect-square  rounded-full animate-spin": true,
      "border-slate-100/80 border-t-indigo-700 border-2 dark:border-t-white dark:border-slate-50/30": props.text,
      "border-slate-100/20 border-t-white border-2": !props.text,
    }

    return style;
  })

  function click(e) {
    e.stopPropagation()
    if (disabled.value) return;
    emits("click", e)
  }
</script>