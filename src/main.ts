import { createApp } from 'vue'
import { createPinia } from 'pinia'

import mainApp from './main-app.vue'
import router from './router'

import './assets/css/main.css'

const app = createApp(mainApp)

app.use(createPinia())
app.use(router)
app.mount('#app')
