import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/create-match',
      name: 'create-match',
      component: () => import('../views/CreateMatchView.vue'),
    },
    {
      path: '/join-match',
      name: 'join-match',
      component: () => import('../views/JoinMatchView.vue'),
    },
  ],
})

export default router
