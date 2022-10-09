<template>
  <div class="w-full flex flex-col min-h-screen">
    <AppBar back title="Create" sub-title="New Album"/>

    <div style="flex-grow: 1" class="pt-3 flex flex-col w-full">
      <Input v-model="form.title" label="Title" :error="error" :message="!error?'':'Provide an album name'" />
      <TextArea v-model="form.description" class="my-6" label="Description"  />
      
      <div class="mt-auto m-3">
        <Button @click="create" :loading="loading" block>
          Save
        </Button>
      
      </div>
    </div>
  </div>
</template>
<script setup>
  import Input from "/src/ui/input.vue"
  import TextArea from "/src/ui/textarea.vue"
  import {newAlbum} from "/providers/album"
  import UseAlbumStore from "/stores/albumStore"
  import {reactive, ref} from "vue"
  
  const form = reactive({
    title:"",
    description:"",
  })
  const store = UseAlbumStore()
  const error = ref(false)
  const loading = ref(false)
  
  async function create(){
    error.value = false;
    if(form.title == ""){
      error.value = true;
    }
    
    if(error.value == true) {
      console.log("not submiting")
      return 
    }
    loading.value = true
    try{
      console.log("submitted")
      let new_album = await newAlbum(form.title, form.description)
      store.addAlbum(new_album)
      console.log("store created")
    }catch(error){
      
      if(typeof error != "number"){
        alert("Network failure")
        return
      }
      switch(error){
        case 400:
          console.log("Error, from incomplete")
          break;
        case 401:
          console.log("Error, Authentication required")
          break;
          default:
          console.log("Error,Server issue")
      }
    }finally{
      loading.value = false
    }
  }
</script>
