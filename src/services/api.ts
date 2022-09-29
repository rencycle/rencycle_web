import axios from 'axios'
import { notifyInfo } from './toastService'

export const client = axios.create({
  // baseURL: import.meta.env.VITE_DEFAULT_GATEWAY_LOCAL as string
  baseURL: import.meta.env.VITE_DEFAULT_GATEWAY_PROD as string,
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`
  }

  return config
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      notifyInfo('Время сессии истекло, пожалуйста, авторизуйтесь заново')
      setTimeout(() => {
        localStorage.removeItem('access_token')
        window.location.href = '/login'
      }, 1000)
    }

    return Promise.reject(error)
  }
)
