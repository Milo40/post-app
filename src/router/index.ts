import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'post',
      // @ts-ignore
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/posts/details',
      name: 'show-post',
      // @ts-ignore
      component: () => import('../views/ShowPostView.vue')
    }
  ]
})

export default router
