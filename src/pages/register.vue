<template>
  <div class="w-full flex flex-col dark:bg-inherit py-3">

    <div class="flex flex-col p-3 mb-4">
      <span class="text-3xl font-bold">Hello,</span>
      <span class="text-lg tracking-wider">Creating new account</span>
    </div>
    <div class="space-y-4">
      
      <SInput :handler="firstname"/>
      
      <SInput :handler="lastname" />
      <div class="py-4">

      </div>
      <SInput :handler="email"/>
      
      <SInput :handler="username"/>

      <SInput :handler="password"/>

      <div class="px-3 items-center flex space-x-2 py-4 ">
        <Checkbox></Checkbox>

        <span class="text- tracking-tight ">i have read and agreed to the terms and conditions</span>
      </div>

    </div>
    <div class="flex p-3">
      <Button block>
        Register
      </Button>
    </div>
  </div>
</template>
<script setup>
  import SInput from "/src/ui/super-input.vue"
  import Input from "/src/ui/input.vue"
  import Button from "/src/ui/button.vue"
  import Checkbox from "/src/ui/Checkbox.vue"
  
  import useInput from "/src/composables/input.js"
  
  import {watch} from "vue"
  
  const firstname = useInput("First Name","")
  
  const lastname = useInput("Last Name", "")
  
  const email = useInput("Email Address", "")
  const username = useInput("Username","","text")
  const password = useInput("Password","","password")
  
</script>
