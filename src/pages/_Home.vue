<template>
  <div class="w-full h-screen relative pb-16 md:pl-16">
    <div class="h-full w-full">
          <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    </div>
    
     <BottomNavigator v-model="selectedTab" />
  </div>
</template>
<script setup>
  import {ref,onErrorCaptured} from "vue"
  
    const selectedTab = ref(0)
  onErrorCaptured(function(error){
    alert("error")
  })
</script>
