<template>
  
  <div v-if="!album.loading" @click="viewAlbum" class="w-full duration-300  overflow-hidden" :class="{'col-span-2':album.featured}">
    <div class="w-full h-full flex flex-col ">
      <div class="w-full aspect-square rounded-md relative overflow-hidden">
        <Image class="absolute top-0 left-0 w-full aspect-square object-cover hover:object-center duration-300" :src="cover" alt="" />

        <div @click="toggleFeature" class="bottom-0 left-0 absolute max-w-full p-1" :class="featureToggleStyle">
          <div v-if="album.features.length > 0" class="flex duration-300 bg-slate-100 p-1 dark:bg-slate-800 rounded-full max-w-full overflow-x-auto" :class="featureToggleStyle">
            <UserAvatar propagate v-for="i in album.features " :key="i" class="shadow duration-300" tiny :user-id="random(15)"></UserAvatar>
          </div>

        </div>

      </div>

      <span class="text-sm md:text-lg mt-1 tracking-wider truncate pr-2 block"> {{album.title}}</span>
      <span class="text-xs md:text-sm">{{album.count}}</span>
    </div>
  </div>
  
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script setup>
  import UserAvatar from "/src/ui/UserAvatar.vue"

  import { ref, computed} from "vue"
  import { random } from "/stores/random"
  import useAlbumStore from "/stores/albumStore"
  import {URI} from "/axios"
  import router from "/router"
  
  const store = useAlbumStore()
  
  const props = defineProps({"index":Number,id:Number})
  const url = URI
  
  const album = store.getAlbum(props.id)
  
  const featuretoggled = ref(false)
  const featureToggleStyle = computed(function(){
    return {
      "-space-x-4":!featuretoggled.value,
      "space-x-0": featuretoggled.value
    }
  })
  
  const cover = computed(function(){
    if(album.value.cover){
      return url+album.value.cover.file
    }else{
      return `/covers/${random(10)}.jpg`
    }
  })
  
  
  function viewAlbum(e){
    e.stopPropagation()
    router.push({
      name:"view-album",
      params:{
        id:album.value.id
      }
    })
  }
  function toggleFeature(e){
    
    e.stopPropagation()
    featuretoggled.value = ! featuretoggled.value
  }
</script>
