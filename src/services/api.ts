import axios from 'axios'

export const client = axios.create({
  baseURL: import.meta.env.VITE_DEFAULT_GATEWAY_LOCAL as string
})
