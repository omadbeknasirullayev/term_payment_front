import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientInfo from '../views/ClientInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import("@/views/ClientsView.vue")
    },
    {
      path: '/clientinfo',
      name: 'clientInfo',
      component: ClientInfo
    },
  ]
})

export default router
