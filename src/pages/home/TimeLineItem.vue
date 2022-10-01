<template>
  <div class="w-full p-4 flex flex-col dark:bg-gradient-to-br bg-white dark:from-indigo-600 dark:to-indigo-800 dark:via-indigo-700 rounded-lg dark:text-white">
    <div class="flex space-x-2">
      <UserAvatar history xsmall class="shrink-0" />
      <div class="flex flex-col ">
        <div class="flex flex-col-reverse items-center light:text-slate-700">
          <span class="text-sm mr-auto">6:30 am</span>
          <span class="truncate font-bold tracking-wide text-lg">Innocent Peros</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2 mt-4">
      <span class="text-sm tracking-wider">added {{count}} pictures to
        <div class=" text-white bg-indigo-700 dark:bg-white dark:text-indigo-700 p-1 px-2 rounded-xl inline-flex items-center">
          <span strip class="bx bxs-collection text-md mr-1"/>
          album</div>
      </span>
      <div class="grid gap-1" :class="gridSize">
        <div v-for="i in count" :key="i" class="w-full aspect-square ring ring-indigo-700/0 duration-300 hover:ring-indigo-700/50 rounded-sm overflow-hidden">
          <Image class="w-full h-full object-cover" :src="cover(i)" alt="" />
        </div>
      </div>
    </div>

    <div class="pt-2 flex items-center ">
      <div class="flex -space-x-5">
        <Avatar class="shadow last:border-none" :key="n" v-for="n in 5" tiny />
      </div>
      <div class="p-1 rounded-md ml-auto flex items-center light:text-white  ">
        <span class="text-md tracking-wide pt-1 px-1">35</span>
        <IconButton text icon="bx-like" class="text-2xl font-light dark:text-white " />

      </div>

      <div class="p-1 flex items-center">
        <span class="text-md tracking-wide pt-1 px-1">35</span>

        <IconButton text icon="bx-chat" class="text-2xl font-light" />
      </div>

    </div>
  </div>
</template>
<script setup>
  import UserAvatar from "/src/ui/UserAvatar.vue"
  
  import { ref, computed } from "vue"
  const col = Math.random().toString().split("").slice(4, 6)

  const count = ref(parseInt(col[0]) + 1)

  const gridSize = computed(function() {
    let c = count.value
    if (c == 1) return 'grid-cols-1'
    if (c == 2) return 'grid-cols-2'
    if (c == 3) return 'grid-cols-3'

    if (c >= 4) return 'grid-cols-4'

    return 'grid-cols-' + c


  })

  function cover(id) {
    const _index = parseInt(
      Math.random().toString().split("").slice(4, 8).join(""))

    let index = 1 + (_index % 4)
    return `/images/avatar${index}.jpg`
  }
</script>
