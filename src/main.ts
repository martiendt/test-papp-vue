import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mainApp from './main-app.vue'
import router from './router'
import FaIcon from '@/global-components/fa-icon.vue'
import './assets/css/main.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(mainApp)

app.use(router)
app.use(createPinia())
app.use(hljsVuePlugin)
// register global component
app.component('FaIcon', FaIcon)
// mount vue application
app.mount('#app')
