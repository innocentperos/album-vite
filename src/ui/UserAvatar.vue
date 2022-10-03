<template>
  <div class="relative group shrink-0 grow-0 ">
    <Avatar v-bind="props" :history="false" :src="actualUserAvatar"/>
    
    <div v-if="history" class="h-5 absolute aspect-square bg-indigo-700 rounded-full right-0 bottom-0 shadow-lg">
    </div>
    
  </div>
</template>
<script setup>
  
  import {computed} from "vue"
  import {useUsersStore} from "/stores/users"
  
  const props = defineProps({
    user:Object,
    userId:Number,
    small:Boolean,
    xsmall:Boolean,
    tiny:Boolean,
    size:Number | String,
    history: Boolean,
    normal:{
      type:Boolean,
      default: true
    },
    large: Boolean
  })
  
  const usersStore = useUsersStore()
  
  const actualUserAvatar = computed(function(){
    if(props.user) return props.user.avatar 
    if(!props.userId && props.userId != 0) {
      throw Error("Provide a user object or userId to UserAvatar")
    }
    let c = usersStore.getUserAvatar(props.userId)
    return c;
    
  })
  
</script>
