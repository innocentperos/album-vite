import "/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app.vue'
import router from "./router"

import Avatar from "/src/ui/avatar.vue"
import UserAvatar from "/src/ui/UserAvatar.vue"

import Button from "/src/ui/button.vue"
import SInput from "/src/ui/super-input.vue"
import Image from "/src/ui/Image.vue"
import Icon from "/src/ui/icon.vue"
import IconButton from "/src/ui/IconButton.vue"
import AppBar from "/src/ui/AppBar.vue"
import BottomNavigitor from "/src/ui/BottomNavigator.vue"
import ButtonGroup from "/src/ui/ButtonGroup.vue"
import GroupButton from "/src/ui/GroupButton.vue"
import Spinner from "/src/ui/Spinner.vue"
import Fab from "/src/ui/fab.vue"
import TextArea from "/src/ui/textarea.vue"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component("Avatar", Avatar)
.component("UserAvatar", UserAvatar)
.component("Button", Button)
.component("SInput", SInput)
.component("TextArea",TextArea)
.component("Image", Image)
.component("Icon", Icon)
.component("IconButton", IconButton)
.component("AppBar", AppBar)
.component("BottomNavigator",BottomNavigitor)
.component("ButtonGroup", ButtonGroup)
.component("GroupButton", GroupButton)
.component("Spinner", Spinner)

.component("Fab", Fab)

  app.mount('#app')
