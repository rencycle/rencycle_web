import type { AxiosResponse } from 'axios'
import type { IUser } from '@/types'
import { client } from './api'

//mocks
export const useAuth = {
  /**
   * Login user
   * @param credentials - user credentials
   * @returns AxiosResponse<IUser> - user data
   */
  login: async (credentials: { email: string; password: string }): Promise<AxiosResponse<IUser>> => {
    const res: AxiosResponse<IUser> = await client.post('/auth/login/', credentials)

    return res
  },

  /**
   * Register user
   * @param credentials - user credentials
   * @returns AxiosResponse<IUser> - user data
   */
  async signup(credentials: IUser): Promise<AxiosResponse<IUser>> {
    const res: AxiosResponse<IUser> = await client.post('/auth/register/', credentials)

    return res
  },

  /**
   * Logout user
   * @returns AxiosResponse<IUser> - user data
   */
  async logout(): Promise<AxiosResponse<IUser>> {
    const res: AxiosResponse<IUser> = await client.post('/auth/logout/')

    return res
  }
}
