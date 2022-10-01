import "/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app.vue'
import router from "./router"

import Avatar from "/src/ui/avatar.vue"
import Button from "/src/ui/button.vue"
import SInput from "/src/ui/super-input.vue"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component("Avatar", Avatar)
.component("Button", Button)
.component("SInput", SInput)

app.mount('#app')
