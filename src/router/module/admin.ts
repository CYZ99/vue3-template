import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: () => import('@/views/AdminPage.vue'),
    redirect: { name: 'Dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/admin/DashboardPage.vue')
      },
      {
        path: 'userlist',
        name: 'UserList',
        component: () => import('@/views/admin/UserListPage.vue')
      }
    ]
  }
]

export default routes
