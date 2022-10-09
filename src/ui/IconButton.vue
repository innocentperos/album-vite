<template>
  <button @click="click" :disabled="disabled" class="flex items-center justify-center aspect-square " :class="classes">

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
    },
    small:Boolean,
    large:Boolean,
    medium:Boolean,
    xlarge:Boolean,
    color: {
      type:String,
      default:"indigo"
    }
  })

  const emits = defineEmits(["click"])

  const innerDisabled = ref(false)

  const disabled = computed(function() {
    return props.disabled || innerDisabled.value || props.loading
  })
  const classes = computed(function() {
    let classs = {
      
      'min-h-10 ring ring-transparent aspect-square duration-300': true,
      "h-8":props.small,
      "h-14":props.large,
      "h-16":props.xlarge,
      "h-12":props.medium,
      "h-10":(!props.small && !props.large && !props.medium && !props.xlarge),
    }
    
    classs[`text-white bg-${props.color}-700 rounded-md hover:ring-${props.color}-800/40`] = !props.text
    classs[`text-dark dark:text-white hover:text-${props.color}-500 hover:dark:text-indigo-300`] = props.text
    
    
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
