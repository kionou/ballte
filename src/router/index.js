import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inscription',
    name: 'inscription',
   
    component: () => import('../views/inscription.vue')
  },
  {
    path: '/Accueil',
    name: 'accueil',
   
    component: () => import('../views/accueil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
