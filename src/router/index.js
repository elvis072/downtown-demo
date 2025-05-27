import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stores',
    name: 'Stores',
    component: () => import('../pages/Stores.vue')
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: () => import('../pages/Restaurants.vue')
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: () => import('../pages/Cinema.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../pages/Events.vue')
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: () => import('../pages/Promotions.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../pages/Location.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../pages/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 