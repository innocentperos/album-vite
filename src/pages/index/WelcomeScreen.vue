<template>

  <div ref="welcomeScreen" v-show="show" class="fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center bg-slate-100 dark:text-white dark:bg-slate-800 ">

    <div class="relative p-2 mt-auto">
      <Avatar large src="/images/avatar2.jpg" />
      <div class="h-full w-full rounded-full absolute top-0 left-0 animate-spin border border-white dark:border-slate-900 border-4 duration-[10s]" :class="showClass">

      </div>
    </div>

    <div class="flex items-center flex-col my-4 text-slate-700 dark:text-white">

      <span class="text-2xl font-bold">Hello {{props.user.first_name}}</span>
      <span class="text-sm tracking-wide">preparing your account</span>
    </div>

    <div class="w-full p-3 mt-auto">
      <Button v-if='loaded' @click="emits('finish')" block>Finish</Button>
    </div>
  </div>

</template>

<script setup>
  import { ref, computed, onMounted } from "vue"


  const props = defineProps({
    "show": Boolean,
    "user": Object
  })

  const emits = defineEmits(["finish"])

  const show = computed(() => props.show)

  const welcomeScreen = ref(null)

  const showClass = ref(['bg-white/100 dark:bg-slate-800', 'border-t-indigo-700 dark:border-t-indigo-700'])
  
  const loaded = ref(false)

  function showWelcome() {
    setTimeout(function() {
      loaded.value = 0
    }, 100)
  }

  onMounted(function() {
    showWelcome()

    setTimeout(() => {
      showClass.value[0] = 'bg-white/0 dark:bg-slate-800/0'
      showClass.value[1] = "border-indigo-700 dark:border-indigo-700"
    }, 100)

    setTimeout(() => {
      loaded.value = true

    }, 7000)
  })
</script>