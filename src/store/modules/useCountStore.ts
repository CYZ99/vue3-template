import { defineStore } from 'pinia'

const useCountStore = defineStore('count', {
  state: () => ({
    num: 1
  }),
  actions: {
    incrementAction() {
      this.num++
    }
  }
})

export default useCountStore
