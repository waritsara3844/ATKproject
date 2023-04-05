import { defineStore } from 'pinia'

export const useServer = defineStore('server', {
  state: () => ({
    users:('users')
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
})