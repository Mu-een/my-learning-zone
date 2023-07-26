import CourseDetailsVue from '@/components/CourseDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/external-html',
    component: CourseDetailsVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
