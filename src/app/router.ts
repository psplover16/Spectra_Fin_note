import { createRouter, createWebHistory } from 'vue-router';
import { routeComponentLoaders } from '@/app/routePreload';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/computer-principles' },
    {
      path: '/computer-principles',
      component: routeComponentLoaders['/computer-principles'],
      meta: { title: '計概' }
    },
    {
      path: '/networking',
      component: routeComponentLoaders['/networking'],
      meta: { title: '網概' }
    },
    {
      path: '/information-management',
      component: routeComponentLoaders['/information-management'],
      meta: { title: '資管' }
    },
    {
      path: '/programming',
      component: routeComponentLoaders['/programming'],
      meta: { title: '程式' }
    },
    {
      path: '/english',
      component: routeComponentLoaders['/english'],
      meta: { title: '英文' }
    },
    {
      path: '/chinese',
      component: routeComponentLoaders['/chinese'],
      meta: { title: '國文' }
    },
    { path: '/:pathMatch(.*)*', redirect: '/computer-principles' }
  ]
});
