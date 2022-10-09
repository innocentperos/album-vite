<template>
  <div @click="click" class="relative group shrink-0 grow-0 rounded-full duration-300">
    <Avatar v-bind="props" :history="ring" :src="actualUserAvatar" />

    <div v-if="history" class="h-5 absolute aspect-square bg-indigo-700 rounded-full right-0 bottom-0 shadow-lg">

    </div>


  </div>
</template>
<script setup>
  import { computed, ref, watch } from "vue"
  import { useUsersStore } from "/stores/users"
  import { AVATARS } from "/stores/random"

  const props = defineProps({
    user: Object,
    userId: Number,
    small: Boolean,
    xsmall: Boolean,
    tiny: Boolean,
    xtiny: Boolean,
    size: Number | String,
    history: Boolean,
    ring: Boolean,
    normal: {
      type: Boolean,
      default: true
    },
    large: Boolean,
    propagate: Boolean
  })

  const emits = defineEmits(["click"])

  const usersStore = useUsersStore()

  const user = usersStore.get(props.userId)

  const actualUserAvatar = computed(() => {
    if(user.value.error){
      return AVATARS.random()
    }
    if (user.value.loading) return "**"
    if (user.value.id) {
      let a = AVATARS[user.value.id]
      return a
    }
    return ".."
  })

  function click(e) {
    if (props.propagate == false) e.stopPropagation()
    emits("click", e)
  }
</script>
