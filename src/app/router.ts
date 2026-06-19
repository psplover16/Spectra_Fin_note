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
      path: '/computer-principles-v2',
      component: routeComponentLoaders['/computer-principles-v2'],
      meta: { title: '計概(v2)' }
    },
    {
      path: '/networking',
      component: routeComponentLoaders['/networking'],
      meta: { title: '網概' }
    },
    {
      path: '/digital-logic',
      component: routeComponentLoaders['/digital-logic'],
      meta: { title: '數位邏輯' }
    },
    {
      path: '/operating-systems',
      component: routeComponentLoaders['/operating-systems'],
      meta: { title: '作業系統' }
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
      path: '/database',
      component: routeComponentLoaders['/database'],
      meta: { title: '資料庫' }
    },
    {
      path: '/algorithms',
      component: routeComponentLoaders['/algorithms'],
      meta: { title: '演算法' }
    },
    {
      path: '/system-design',
      component: routeComponentLoaders['/system-design'],
      meta: { title: '系統設計' }
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
