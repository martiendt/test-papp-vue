import { createRouter, createWebHistory } from 'vue-router'
import { routes as mainRoutes } from '@/modules/main/routes'
import { routes as templateRoutes, pageRoutes } from '@/modules/template/routes'

const routes = [mainRoutes, templateRoutes, pageRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
