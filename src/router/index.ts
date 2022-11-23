import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes: RouteRecordRaw[] = []

const modules: any = import.meta.glob('./module/*.ts', { eager: true })
for (const path in modules) {
  // 获取到文件路径
  // 提取路径和组件存放到数组中
  // routes.push({ path: '/', component: () => import('@/views/FrontPage.vue') })
  routes.push(...modules[path].default)
}
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
