<template>
  <div class="w-full h-full flex flex-col justify-center ">
    
    <div class="h-32 w-32 aspect-square overflow-hidden relative m-3 rounded-md shadow shadow-indigo-500/10">
      <img class="absolute h-full w-full object-cover object-center top-0 left-0 " src="/images/icon.jpg" alt="">
    </div>

    <Input class="my-3" label="Email Address" v-model="email" :message="email_error" :error="email_error!=''" right-icon="bx-at" type="email">

    </Input>

    <Input class="my-3" label="Password" v-model="password" :message="password_error" :error="password_error != ''" left-icon="bx-lock" type="password">

    </Input>

    <div class="w-full flex justify-end text-sm text-blue -600 p-3 py-5 tracking-wider text-indigo-500 underline hover:text-indigo-700 duration-200 select-none">
      <span>forgot your password?</span>
    </div>

    <Button @click="login" :loading="loading" class="m-3"> Login</Button>

    <div class=" flex justify-center w-full items-center">
      <div class="flex-grow h-px bg-gray-400 rounded-md"></div>
      <span class="flex-shrink px-2 tracking-wide ">OR</span>
      <div class="flex-grow h-px bg-gray-400 rounded-md"></div>
    </div>

    <div class="w-full flex flex-col items-center justify-center p-3">
      <span class="text-sm">dont have an account</span>
      <Button @click="register" :loading="loading" block class="m-3"> create one</Button>
      <span class="text-sm my-2 text-indigo-700" @click="previous">view accounts</span>

    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useStore } from "/stores/store"
  import Input from "/src/ui/input.vue"
  import Button from "/src/ui/button.vue"
  import router from "/router"
  import {Login} from "/api/auth"
  
  
  const store = useStore()

  const name = ref("innocent")

  const loading = ref(false)
  const email = ref("innocentperos@yahoo.com")
  const email_error = ref("")
  const password = ref("admin")
  const password_error = ref("")



  async function login() {
    let error = false
    if (email.value == "") {
      email_error.value = 'please provide your email'
      error = true
    } else {
      email_error.value = ''
    }
    if (password.value == "") {
      password_error.value = 'please provide your password'
      error = true
    } else {
      password_error.value = ''
    }

    if (error) return

    loading.value = true

    setTimeout(function() {
      loading.value = false

    }, 5000)
    
    const resp = await Login(email.value, password.value)
    
    console.log(resp)
  }
  
  function previous(){
    router.push({
      name:"previous_users"
    })
  }
  
  function register(){
    router.push({
      name:"register"
    })
  }
</script>
