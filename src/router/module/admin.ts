import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: () => import('@/views/AdminPage.vue')
  }
]

export default routes
