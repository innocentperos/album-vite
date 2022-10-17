
<template>
  <div class="h-full w-full overflow-auto">
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
  </div>
</template>
