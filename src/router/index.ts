import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientInfo from '../views/ClientInfoView.vue'
import ProductsView from '../views/ProductsView.vue'

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
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
  ]
})

export default router
