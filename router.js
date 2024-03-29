import { createRouter, createWebHashHistory } from "vue-router"
import { defineAsyncComponent } from "vue"

import Home from "/src/pages/Home.vue"
import Login from "/src/pages/Login.vue"
import PreviouUsers from "/src/pages/previous_users.vue"
import LoginUser from "/src/pages/login_previous.vue"
import  Register from "/src/pages/register.vue"
import  Feeds from "/src/pages/Feeds.vue"
import Chats from "/src/pages/Chats.vue"
import  Chat from "/src/pages/Chat.vue"
import Albums from "/src/pages/Albums.vue"
import NewAlbum from "/src/pages/NewAlbum.vue"
import Album from "/src/pages/Album.vue"
import NewPost from "/src/pages/NewPost.vue"

const routes = [
  {
    path: '/login',
    component: Login,
    name: "login"
  },
  {
    path: "/previous",
    component: PreviouUsers,
    name: "previous_users"
  },
  {
    path: "/previous/:id/login",
    component: LoginUser,
    name: "login-user"
  },

  {
    path: "/register",
    component: Register,
    name: "register"
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        component: Feeds,
        name: "home"
      },
     {
       path: "albums",
       component: Albums,
       name: "albums"
     },
     {
       path: "chats",
       component: Chats,
       name: "chats"
     },
    ]
  },
  {
    path: "/chats/:id",
    component: Chat,
    name: "chat"
  },
  {
    path: "/album/new",
    component: NewAlbum,
    name: "new-album"
  },
  {
    path: "/album/:id",
    component: Album,
    name: "view-album"
  },

  {
    path: "/post/:album/new",
    component: NewPost,
    name: "new-post"
  }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;
