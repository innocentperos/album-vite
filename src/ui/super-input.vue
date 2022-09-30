<template>
  <Input v-model="value" :error="props.handler.error" :label="props.handler.label" :message="props.handler.message" :disabled="props.handler.disabled" :type="props.handler.type"></Input>
</template>

<script setup>
  import { ref, onMounted, watch} from "vue"
  import Input from "/src/ui/input.vue"

  const value = ref("")

  onMounted(function() {
    value.value = props.handler.value
  })

  watch(value, function() {
    props.handler.value = value.value
  })

  const props = defineProps({
    handler: Object,
  })
</script>
