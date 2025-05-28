import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import './index.css'

// Styles
import './assets/styles/global.css'

// Inicializar AOS
AOS.init({
  duration: 400,
  easing: 'ease-out',
  once: true,
  offset: 50,
  throttleDelay: 50
})

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app') 