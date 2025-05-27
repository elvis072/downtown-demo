import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'

// Pages
import Home from './pages/Home.vue'
import Admin from './pages/Admin.vue'
import Stores from './pages/Stores.vue'
import Restaurants from './pages/Restaurants.vue'
import Cinema from './pages/Cinema.vue'
import Events from './pages/Events.vue'
import Promotions from './pages/Promotions.vue'
import Location from './pages/Location.vue'
import Contact from './pages/Contact.vue'
import About from './pages/About.vue'

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

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/stores', component: Stores },
  { path: '/restaurants', component: Restaurants },
  { path: '/cinema', component: Cinema },
  { path: '/events', component: Events },
  { path: '/promotions', component: Promotions },
  { path: '/location', component: Location },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app') 