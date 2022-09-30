<template>
  <div class="w-full h-full flex flex-col py-3">

    <div class="flex flex-col p-3 mb-4">
      <span class="text-3xl font-bold">Hello,</span>
      <span class="text-lg tracking-wider">Creating new account</span>
    </div>
    <div class="space-y-4">
      <Input label="First Name">

      </Input>
      <Input label="Last Name">

      </Input>
      <div class="py-4">

      </div>
      <Input label="Email Address">

      </Input>
      <Input label="Username" message="This will be display as your unique id">

      </Input>
      <Input label="Password" message="pasword most be at less 8 characters long">

      </Input>
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
  import Input from "/src/ui/input.vue"
  import Button from "/src/ui/button.vue"
  import Checkbox from "/src/ui/Checkbox.vue"
</script>
