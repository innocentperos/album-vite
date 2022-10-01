import "/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app.vue'
import router from "./router"

import Avatar from "/src/ui/avatar.vue"
import Button from "/src/ui/button.vue"
import SInput from "/src/ui/super-input.vue"
import Image from "/src/ui/Image.vue"
import Icon from "/src/ui/icon.vue"
import IconButton from "/src/ui/IconButton.vue"
import AppBar from "/src/ui/AppBar.vue"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component("Avatar", Avatar)
.component("Button", Button)
.component("SInput", SInput)
.component("Image", Image)
.component("Icon", Icon)
.component("IconButton", IconButton)
.component("AppBar", AppBar)

app.mount('#app')
