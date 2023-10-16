import { createRouter, createWebHistory } from 'vue-router'
import StarterPage from '../views/StarterPage.vue';
import AutrePage from '../views/AutrePage.vue';
import PipelinePage from '../views/PipelinePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StarterPage,
    },
    {
      path: '/project',
      name: 'pipeline',
      component: PipelinePage,
    },
    {
      path: '/autre',
      name: 'autre',
      component: AutrePage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
