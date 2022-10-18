<template>
  <div class="w-full h-screen relative  flex flex-row">
    <div class="h-full w-full md:pl-16">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component class="pb-16" :is="Component" />
        </keep-alive>
      </router-view>

    </div>

    <BottomNavigator v-model="selectedTab" />
  </div>
</template>
<script setup>
  import { ref, onErrorCaptured, onMounted } from "vue"
  import Router from "/router"

  const selectedTab = ref(0)
  onMounted(function() {
    const currentRoute = Router.currentRoute.value.name

    switch (currentRoute) {
      case "home":
        selectedTab.value = 0
        break;
      case "albums":
        selectedTab.value = 2
        break;
      case "chat":
        selectedTab.value = 3
        break;
      default:
        selectedTab.value = 0

    }
  })
  onErrorCaptured(function(error) {
    alert("error")
  })
</script>