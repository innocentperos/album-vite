<template>
  <div class="w-full min-h-full py-16">
    
    <AppBar back title="Chats">
      <template #actions>
        <IconButton text class="h-10" icon="bx-user"></IconButton>
      </template>
    </AppBar>
    
    <div class="w-full divide-y divide-px divide-slate-600/50">
      
      <div class="w-full flex px-3 space-x-2 py-4" v-for="i in 16">
        <UserAvatar class="mb-auto" small></UserAvatar>
        <div class="flex flex-col">
          <span class="font-bold tracking-wider text-lg ">Innocent Peros</span>
          
          <span class="text-sm tracking-wide ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, est?<Icon disabled class="inline-flex" icon="bx-check-double text-xl"></Icon>

          </span>
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
