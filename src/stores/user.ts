import { defineStore } from 'pinia'
import type { IUser } from '@/types'
import { useAuth } from '@/services/auth'
import type { AxiosResponse } from 'axios'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {} as IUser,
    isLoading: false
  }),
  getters: {
    getUser() {
      const access_token = localStorage.getItem('access_token')
      if (!access_token) return

      return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : {}
    }
  },
  actions: {
    async registerUser(user: IUser) {
      this.user = user
      this.isLoading = true
      const res: AxiosResponse<IUser> = await useAuth.signup(user)
      this.user = res.data
      this.isLoading = false

      return res
    },
    async loginUser(email: string, password: string) {
      this.isLoading = true
      const res: AxiosResponse<any> = await useAuth.login({ email, password })
      this.user = res.data
      localStorage.setItem('access_token', res.data.access_token!)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      this.isLoading = false

      return res
    },
    async logout() {
      this.isLoading = true
      const res: AxiosResponse<IUser> = await useAuth.logout()
      this.user = {} as IUser
      localStorage.removeItem('access_token')
      this.isLoading = false

      return res
    }
  }
})
