<template>
  <div class="h-full w-full flex flex-col justify-center">
    
    <div class=" flex flex-col p-3">
      
      <div class="flex flex-col">
        <Avatar src="/images/avatar3.jpg"></Avatar>
        <span class="text-2xl font-bold">Welcome</span>
        <span class="text-lg mb-3 tracking-wider">@innocentperos</span>
      </div>
      <span class="text-md">let sign you back real quick</span>
    </div>
    
    <div class="my-5">
      <Input label="Password" left-icon="bx-key text-lg" ></Input>
    </div>
    
        <div class=" flex flex-col">
      <span class="block mx-4 my-2 tracking-wider text-right text-md text-indigo-500 select-none hover:text-indigo-700 duration-300 ml-auto" @click="notMyAccount">not your account?</span>
          <div class="p-3">
          <div @click="login" class="p-3 bg-indigo-700 hover:bg-indigo-900 duration-300 w-full rounded-md flex items-center justify-center text-white uppercase tracking-wider" >
      Login
    </div>

    </div>

    </div>

  </div>
</template>

<script setup>
  import Input from '/src/ui/input.vue'
  import Avatar from '/src/ui/avatar.vue'
  import router from "/router"
  function notMyAccount(){
    router.push({
      name:"login"
    })
  }
  
  function login(){
    alert("ok")
  }
  
</script>
