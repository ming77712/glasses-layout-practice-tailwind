import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/IndexView.vue'),
  },
  {
    path: '/optical',
    component: () => import('@/views/OpticalView.vue'),
  },
  {
    path: '/store',
    component: () => import('@/views/StoreView.vue'),
  },
  {
    path: '/blog',
    component: () => import('@/views/BlogView.vue'),
  },
  {
    path: '/faq',
    component: () => import('@/views/FaqView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router
