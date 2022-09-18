import { defineStore } from 'pinia'
import type { IUser } from '@/types'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {} as IUser
  }),
  getters: {
    getUser(): IUser {
      return this.user
    }
  },
  actions: {
    async fetchUser() {
      // fetch user from the api
      // and set the user state
    }
  }
})
