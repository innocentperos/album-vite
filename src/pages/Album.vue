<template>
  <div class="min-h-screen md:h-screen w-full md:flex md:flex-col">

    <AppBar back>

      <template #title>
        <div class="pb-2" v-if="album.loading">
          <div class="h-3 rounded bg-slate-400 rounded-full w-32 animate-pulse"></div>

        </div>
        <span v-else>{{album.title}}</span>
      </template>

      <template #subTitle>
        <div v-if="album.loading" class="h-2 rounded bg-slate-400 rounded-full w-24 animate-pulse"></div>
        <span v-else>{{album.count}} photos</span>
      </template>

      <template #actions>
        <div v-if="!album.loading && !album.error" class="flex">
          <IconButton text @click="expand" icon="bx-expand-alt text-xl " />
          <IconButton text @click="swapView" class="text-xl " :icon="(viewType == HISTORY )?'bx-grid-alt':'bx-history'" />
          <IconButton text @click="filter" icon="bx-filter-alt text-xl " />

        </div>

      </template>
    </AppBar>

    <FilterPanel :album-id="album.id" v-if="showFilter" v-model="showFilter"></FilterPanel>

    <div class="md:flex h-full overflow-auto">
      <div class="w-full h-full">
        <div v-if="viewType==ITEMS" class="p-2">
          <div class="grid gap-2 duration-300" :class="colSize">
            <div v-for="i in covers" :key="i" class="w-full relative overflow-hidden shadow rounded-md duration-300" :class="gridItemSized">
              <Image @click="gotoView(i.id)" :id="'cover-'+i.id" :src="url+i.file" class="h-full w-full object-cover hover:scale-110 scale-100 duration-300">

              </Image>
            </div>
          </div>
        </div>
        <AlbumHistory :scale="scale" v-else />

      </div>
      <div class="md:sticky md:top-16  md:w-2/5 h-full border border-transparent border-l-slate-300 ">
        Album Descrition
      </div>
    </div>

    <Fab icon="bx-plus" @click="newPost"/>

  </div>
</template>

<script setup>
  import FilterPanel from "/src/pages/album/FilterPanel.vue"
  import AlbumHistory from "/src/pages/album/AlbumHistory.vue"

  import useAlbumStore from "/stores/albumStore"
  import useUsersStore from "/stores/users"
  import { random } from "/stores/random"
  import {URI} from "/axios"

  import router from "/router"
  import { ref, watch, onMounted, computed } from "vue"

  import { getCovers } from "/providers/album"

  const id = router.currentRoute.value.params.id

  const store = useAlbumStore()
  const userStore = useUsersStore()

  const album = store.getAlbum(id)
  const scale = ref(4)
  const url = URI

  const colSize = computed(() => 'grid-cols-' + scale.value)

  const gridItemSized = computed(function() {
    return {
      "aspect-square": scale.value != 1
    }
  })


  // Handles the expanding of the grid items
  function expand() {
    switch (scale.value) {
      case 1:
        if (covers.length < 2) {
          scale.value = 1;
          return;
        }
        scale.value = 2;
        break;
      case 2:
        if (covers.length < 3) {
          scale.value = 1;
          return;
        }
        scale.value = 3;
        break;
      case 3:
        if (covers.length < 4) {
          scale.value = 1;
          return;
        }
        scale.value = 4;
        break;
      default:

        scale.value = 1;
        break;
    }
  }

  //Used to hide/show the filter panel
  const showFilter = ref(false)

  //function to toggle the filter panel
  function filter() {
    showFilter.value = !showFilter.value
  }

  //The two the type of views available
  const ITEMS = 'items'
  const HISTORY = 'history'
  const viewType = ref(ITEMS)

  //For swaping from one view to the other
  function swapView() {
    if (viewType.value == HISTORY) {
      viewType.value = ITEMS
    } else {
      viewType.value = HISTORY
    }
  }

  //handling the cover loading
  const covers = ref([])

  async function loadCovers() {
    console.log("loafing covers")
    try {
      let _covers = await getCovers(album.value.id)
      if (_covers.length) {
        if ((_covers.length) < 5)
          scale.value = 2
        covers.value = _covers
      }
    } catch (error) {
      console.log(error)
    }
  }
  loadCovers()
  watch(album, function(n, o) {
    loadCovers()
  })

  function gotoView(id) {
    scale.value = 1

    setTimeout(() => {
      let element = document.getElementById("cover-" + id)
      element.scrollIntoView()
    }, 100)

  }
  
  function newPost(){
    console.log("clicked")
    router.push({
      name:"new-post",
      params:{
        album:id
      }
    })
  }
</script>
