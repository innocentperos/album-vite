<template>
  <div class="w-full p-4 flex flex-col dark:bg-gradient-to-br bg-white dark:from-indigo-600 dark:to-indigo-800 dark:via-indigo-700 rounded-lg dark:text-white">
    <div class="flex space-x-2">
      <UserAvatar :user="user" history xsmall class="shrink-0" />
      <div class="flex flex-col ">
        <div class="flex flex-col-reverse items-center light:text-slate-700">
          <span class="text-sm mr-auto">6:30 am</span>
          <span class="truncate font-bold tracking-wide text-lg">{{user.first_name}} {{user.last_name}}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2 mt-4">
      <span class="text-sm tracking-wider">added {{count}} pictures to
        <div class=" text-white bg-indigo-700 dark:bg-white dark:text-indigo-700 p-1 px-2 rounded-xl inline-flex items-center">
          <span strip class="bx bxs-collection text-md mr-1" />
          album
        </div>
      </span>
      <div class="grid gap-1" :class="gridSize">
        <div v-for="i in count" :key="i" class="w-full aspect-square ring ring-indigo-700/0 duration-300 hover:ring-indigo-700/50 rounded-sm overflow-hidden">
          <Image class="w-full h-full object-cover" :src="cover(i)" alt="" />
        </div>
      </div>
    </div>

    <div class="pt-2 flex items-center ">
      <div class="flex -space-x-5">
        <UserAvatar class="shadow rounded-full last:border-none" :key="n" v-for="n in item.features" :user-id="n" tiny />
      </div>
      <div class="p-1 rounded-md ml-auto flex items-center light:text-white  ">
        <span class="text-md tracking-wide pt-1 px-1">{{reactions}}</span>
        <IconButton @click="react" text icon="bx-like" class="text-2xl font-light dark:text-white " />

      </div>

      <div class="p-1 flex items-center ml-2">
        <span class="text-md tracking-wide pt-1 px-1">{{comments}}</span>

        <IconButton @click="comment" text icon="bx-chat" class="text-2xl font-light" />
      </div>

    </div>
  </div>
</template>
<script setup>
  import UserAvatar from "/src/ui/UserAvatar.vue"
  import { random ,AVATARS} from "/stores/random"

  import { useUsersStore } from "/stores/users"

  import useTimelineStore from "/stores/timelineStore"

  import { ref, computed, onMounted } from "vue"

  const store = useTimelineStore()
  const userStore = useUsersStore()
  
  const props = defineProps({
    item:Object
  })

  const item = computed(function(){
    if(props.item)
    return props.item 
    
    return store.get(random(100))
  })
  const user = userStore.get(item.value.user)

  const count = item.value.photos
  
  const comments = computed(function(){
    let n = item.value.comments
    
    if(n/1000 > 1 ){
      return Math.floor(n/1000) + "k"
    }
    
    return n;
  })
  
  const reactions = computed(function() {
    let n = item.value.reactions
  
    if (n / 1000 > 1) {
      return Math.floor(n / 1000) + "k"
    }
    return n;
  })

  const gridSize = computed(function() {
    if (count == 1) return 'grid-cols-1'
    if (count == 2) return 'grid-cols-2'
    if (count == 3) return 'grid-cols-3'

    if (count >= 4) return 'grid-cols-4'

    return 'grid-cols-' + count


  })

  function cover(id) {
    return AVATARS.random()
  }
  
  function react(){
    store.react(item.value.id)
  }
  function comment() {
    store.comment(item.value.id)
  }
</script>
