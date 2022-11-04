import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mainApp from './main-app.vue'
import router from './router'
import FaIcon from "@/components/fa-icon.vue"

import './assets/css/main.css'

const app = createApp(mainApp)
app.use(createPinia())
app.use(router)
// register global component
app.component('FaIcon', FaIcon)
// mount vue application
app.mount('#app')
