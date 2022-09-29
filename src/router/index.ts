import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/ecologist',
      name: 'Ecologist',
      component: () => import('@/pages/Ecologiest/Ecologist.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/facilities',
      name: 'Facilities',
      component: () => import('@/pages/Auditor/Facilities.vue')
    },
    {
      path: '/facilities/auditor/:id',
      name: 'Auditor',
      component: () => import('@/pages/Auditor/Auditor.vue')
    },
    {
      path: '/create-application',
      name: 'CreateApplication',
      component: () => import('@/pages/Ecologiest/CreateApplication.vue')
    },
    /**
     * Other routes
     */
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})

export default router
