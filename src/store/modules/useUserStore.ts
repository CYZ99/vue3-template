import { defineStore } from 'pinia'

export const KEY_USER_ID = 'user'
export interface UserInfo {
  id: number
  username: string
  role: string
  email: string
  token: string
}

const useUserStore = defineStore(KEY_USER_ID, {
  state: (): UserInfo => ({
    id: -1,
    username: '',
    role: '',
    email: '',
    token: ''
  }),
  actions: {
    login(user: Partial<UserInfo>) {
      this.$state = { ...this.$state, ...user }
    }
  }
})

const instance = useUserStore()
instance.$subscribe((mutation, value) => {
  localStorage.setItem(instance.$id, JSON.stringify(value))
})

// init
const val = localStorage.getItem(instance.$id)
if (val) {
  instance.login(JSON.parse(val))
}
export default useUserStore
