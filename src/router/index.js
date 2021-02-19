import { createRouter, createWebHistory } from 'vue-router'

import DefaultRouter from './DeefaultRouter'
import AuthRouter from './AuthRouter'
import AdminRouter from './AdminRouter'

const routes = [

  /**
   * Admin Routers
   */
  ...DefaultRouter,

  /**
   * Auth Routers
   */
  ...AuthRouter,

  /**
   * Admin Routers
   */
  ...AdminRouter
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
