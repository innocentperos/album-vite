import { createRouter, createWebHashHistory } from "vue-router"
import { defineAsyncComponent } from "vue"

import Home from "/src/pages/Home.vue"

const Login = defineAsyncComponent(()=> import("./src/pages/login.vue"))
const PreviouUsers = defineAsyncComponent(() => import("./src/pages/previous_users.vue"))

const LoginUser = defineAsyncComponent(() => import("/src/pages/login_previous.vue"))

const Register = defineAsyncComponent(() => import("/src/pages/register.vue"))

const Feeds = defineAsyncComponent(() => import("/src/pages/Feeds.vue"))

const Chats = defineAsyncComponent(() => import("/src/pages/Chats.vue"))

const Chat = defineAsyncComponent(() => import("/src/pages/Chat.vue"))

const Albums = defineAsyncComponent(() => import("/src/pages/Albums.vue"))

const NewAlbum = defineAsyncComponent(() => import("/src/pages/NewAlbum.vue"))

const Album = defineAsyncComponent(() => import("/src/pages/Album.vue"))

const NewPost = defineAsyncComponent(() => import("/src/pages/NewPost.vue"))


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
