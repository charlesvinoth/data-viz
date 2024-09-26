import '@/styles/index.css'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import Ripple from './directives/ripple'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.directive('ripple', Ripple)

app.mount('#app')
