<template>
  <div class="w-full min-h-full py-16">
    
    <AppBar back title="Chats">
      <template #actions>
        <IconButton text class="h-10 text-2xl" icon="bx-user"></IconButton>
      </template>
    </AppBar>
    
    <div class="w-full divide-y divide-px divide-slate-600/50">
      
      <div class="w-full flex px-3 py-4 relative" v-for="i in 16">
        <UserAvatar class="mb-auto" small></UserAvatar>
        <div class="ml-2 flex flex-col">
          <span class="font-bold tracking-wider text-lg ">Innocent Peros</span>
          
          <span class="text-sm tracking-tight ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, est?
            <Icon disabled class="inline-flex" icon="bx-check-double text-lg"></Icon>

          </span>
        </div>
        <div class="text-sm my-auto h-8  aspect-square rounded-full bg-indigo-700 shrink-0 flex items-center justify-center text-white mt-auto">
          50+
        </div>
      </div>
    </div>
    
    <BottomNavigator v-model="activeTab" fab="bx-plus"></BottomNavigator>
  </div>
</template>

<script setup>
  import UserAvatar from "/src/ui/UserAvatar.vue"
  import BottomNavigator from "/src/ui/BottomNavigator.vue"
  
  import {ref} from "vue"
  const activeTab = ref(3)
</script>
