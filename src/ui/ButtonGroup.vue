<template>
  <div class="h-10 dark:bg-slate-600 bg-slate-200 w-full flex rounded-md text-sm tracking-wider">
    <slot>
      <div v-for="item,index in items" class="w-full h-full first:rounded-l-md last:rounded-r-md flex items-center justify-center duration-300" :class="getStyle(index)" @click="select(index)">{{getContent(item)}}</div>

    </slot>
  </div>

</template>
<script setup>
  import { ref, reactive, computed } from "vue"

  const props = defineProps({
    items: Array | Object
  })

  const active = ref(null)

  const emits = defineEmits([
      "select"])

  function select(index) {
    emits("select", index)
    active.value = index
    console.log(index)
  }

  function getStyle(index) {
    return {
      "bg-indigo-500/30 dark:bg-indigo-700/50 border border-indigo-700/70 text-indigo-700 dark:text-white":active.value == index,
    }
  }

  function getContent(item) {
    if (typeof item == "string") {
      return item
    } else {
      if (item.includes("text")) {
        return item.text
      }
    }
    return "Oops"
  }
</script>
