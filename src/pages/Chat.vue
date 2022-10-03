<template>
  <div class="min-h-full w-full">
    <AppBar back title="Innocent Peros" sub-title="active">
      <template #actions>
        <UserAvatar :user-id="userId" tiny/>
      </template>
    </AppBar>


    <div class="w-full">

      <div>
        <Message v-for="i in 48" :key="i"></Message>
      </div>
    </div>

    <div class="min-h-16 h-16 w-full sticky bottom-0 bg-slate-100 dark:bg-slate-900 p-1 hover:h-24 duration-300 flex ">
      
      <textarea placeholder="Message here" class="resize-none outline-none bg-transparent w-full h-full flex items-center  placeholder:top-2 pt-3"></textarea>
      
      <div class="shrink-0 my-auto mx-4">
        <Icon icon="bxs-paper-plane text-2xl"></Icon>
      </div>
    </div>

  </div>
</template>
<script setup>
import UserAvatar from "/src/ui/UserAvatar.vue"
  import Message from "/src/ui/Message.vue"
  
  import router from "/router"
  const currentRoute = router.currentRoute.value;
  const userId = parseInt(currentRoute.params.id)
  
</script>
