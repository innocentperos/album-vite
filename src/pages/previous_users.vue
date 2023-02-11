<template>
  <div class="h-full flex flex-col w-full">

    <div class="my-auto flex flex-col p-3">
      <span class="text-3xl font-bold">The Album</span>
      <span class="text-lg">select your account</span>
    </div>

    <div class="">
      <div v-for="i in 4" @click="selectedUser = i" :key="i" class="flex items-center space-x-4 px-4 py-4 hover:bg-white hover:dark:bg-slate-900" :class="{'bg-indigo-700/10':selectedUser==i}">
        <Avatar small :src="'/images/avatar'+(i%4+1)+'.jpg'" alt=""/>

        <div class="flex flex-col flex-grow">

          <span class=" tracking-wider">@innocentperos</span>
          <span class="text-sm">
            active 6 hours ago
          </span>

        </div>
        <div class="ml-auto h-8 aspect-square shadow-lg bg-white dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-white rounded-lg ring ring-transparent hover:ring-indigo-500/30 duration-200">
          <span class="bx bx-dots-horizontal text-lg"></span>
        </div>
      </div>
    </div>
    
    <div class="mt-auto flex flex-col">
      <span class="block mx-4 my-2 tracking-wider text-right text-md text-indigo-500 select-none hover:text-indigo-700 duration-300 ml-auto" @click="login">account not listed ?</span>
          <div class="p-3">
          <div @click="loginUser" class="p-4 bg-indigo-700 hover:bg-indigo-900 duration-300 w-full rounded-md flex items-center justify-center text-white uppercase tracking-wider">
      Select
    </div>

    </div>

    </div>
  </div>
</template>

<script setup>
  import router from "/router"
  import Image from "/src/ui/Image.vue"
  import Avatar from "/src/ui/avatar.vue"
  import {ref} from "vue"
  
  function login(){
    router.push("/")
  }
  
  const selectedUser = ref(-1)
  
  function loginUser(){
    if(selectedUser.value< 0) return;
    router.push({
      name:"login-user",
      params:{
        id:selectedUser.value
      }
    })
  }

</script>
