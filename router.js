import { createRouter, createWebHashHistory }  from "vue-router"
import Index from "./src/pages/index.vue"
import PreviouUsers from "./src/pages/previous_users.vue"
import LoginUser from "/src/pages/login_previous.vue"

const routes = [
  { path: '/', component: Index, name:"login" },
  {path:"/previous", component: PreviouUsers, name:"previous_users"},
  {path:"/previous/:id/login", component: LoginUser, name:"login-user"}
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
