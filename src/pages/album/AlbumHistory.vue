<template>
  <div v-for="i in 3" class=" w-full ">
    <div class="w-full flex">
      <div class="flex flex-col justidy-center items-center">
        <UserAvatar class="sticky  top-[70px] md:top-2" xsmall :user-id="random(50)"></UserAvatar>
        <div class="w-1 h-full bg-slate-300">

        </div>
      </div>
      <div class="p-3 pb-0 w-full">
        <div class="grid gap-2 duration-300 w-full" :class="colSize">
          <div v-for="i in 10+random(15)" :key="i" class="w-full relative overflow-hidden shadow rounded-md duration-300" :class="gridItemSized">
            <Image :src="'/covers/'+i%11+'.jpg'" class="h-full w-full object-cover hover:scale-110 scale-100 duration-300"/>
          </div>
        </div>
        <div class="flex flex-col space-y-0 my-2">
          <span class="text-md tracking-wider">Innocent Peros</span>
          <span class="text-xs tracking-wide">Added {{random(20)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { random } from "/stores/random"
  import { ref, computed } from "vue"
  const props = defineProps({ scale: Number })
  const scale = computed(() => props.scale)


  const colSize = computed(() => 'grid-cols-' + scale.value)

  const gridItemSized = computed(function() {
    return {
      "aspect-square": scale.value != 1
    }
  })
</script>
