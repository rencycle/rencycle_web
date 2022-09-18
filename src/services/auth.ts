import type { IUser } from '@/types'
import type { AxiosResponse } from 'axios'
import { client } from './api'

//mocks
export const useAuth = {
  /**
   * Login user
   * @param credentials - user credentials
   * @returns AxiosResponse<IUser> - user data
   */
  login: async (credentials: IUser) => {
    const res: AxiosResponse<IUser> = await client.post('/auth/login', credentials)

    return res
  },

  /**
   * Register user
   * @param credentials - user credentials
   * @returns AxiosResponse<IUser> - user data
   */
  async signup(credentials: IUser) {
    const res: AxiosResponse<IUser> = await client.post('/auth/register/', credentials)

    return res
  }
}
