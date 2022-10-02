<template>
  <div class="w-full min-h-full py-16">

    <AppBar back title="Chats">
      <template #actions>
        <IconButton text class="h-10 text-2xl" icon="bx-user"></IconButton>
      </template>
    </AppBar>

    <div class="w-full divide-y divide-px divide-slate-600/50">

      <div class="w-full flex px-3 py-4 relative" v-for="i in 16">
        <UserAvatar  :src="AVATARS.random()" class="mb-auto" small></UserAvatar>
        <div class="ml-2 flex flex-col">
          <span class="font-bold tracking-wider text-lg ">{{randomName()}} {{randomName()}}</span>

          <span class="text-sm tracking-tight ">
            <Icon disabled class="inline-flex" icon="bx-check-double text-xl"></Icon>

            {{randomText(10)}}

          </span>
        </div>
        <div class="ml-1 text-xs font-bold my-auto h-8  aspect-square rounded-full bg-indigo-700 shrink-0 flex items-center justify-center text-white mt-auto">
          {{random(50)}}
        </div>
      </div>
    </div>
    
    <div class="w-full p-3 flex items-center justify-center">
      <div class="h-10 aspect-square rounded-full border-2 dark:border-slate-50/50 border-slate-400/50 border-t-indigo-700 dark:border-t-indigo-700 animate-spin">
        
      </div>
    </div>

    <BottomNavigator v-model="activeTab" fab="bx-plus"></BottomNavigator>
  </div>
</template>

<script setup>
  import UserAvatar from "/src/ui/UserAvatar.vue"
  import BottomNavigator from "/src/ui/BottomNavigator.vue"
  import {randomName,random, randomText, AVATARS} from "/stores/usersData"

  import { ref } from "vue"
  const activeTab = ref(3)
</script>
