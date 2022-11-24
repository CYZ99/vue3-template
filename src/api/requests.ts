import router from '@/router'
import { KEY_USER_ID, type UserInfo } from '@/store/modules/useUserStore'
import { OK_CODE, NO_PERMISSON } from '@/app/keys'
import axios from 'axios'

const requests = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000
})

// 请求拦截器的封装 处理 在请求头加 token,这里的 token 没有从 store 中加载
// 是因为这个文件加载时 pinia 有可能还没初始化完毕
requests.interceptors.request.use((config) => {
  config = config || {}
  const user = JSON.parse(localStorage.getItem(KEY_USER_ID) || '') as UserInfo
  if (user.token) {
    config.headers!['Authorization'] = `Bearer ${user.token}`
  }
  return config
})

// 响应拦截器的封装
requests.interceptors.response.use((res) => {
  const { code, msg } = res.data || {}
  if (code !== OK_CODE) {
    return Promise.reject(msg)
  }
  if (code === NO_PERMISSON) {
    router.push({ name: 'Login' }).then()
    return Promise.reject(msg)
  }
  return Promise.resolve(res)
})

export default requests
