import type { IApplicationResponse } from '@/types'
import type { AxiosResponse } from 'axios'
import { client } from './api'

// mocks
export const useApplications = {
  async fetchApplications() {
    const res: AxiosResponse<IApplicationResponse[]> = await client.get('/applications')

    return res
  },

  async fetchApplication(id: string) {
    const res: AxiosResponse<IApplicationResponse> = await client.get(`/applications/${id}`)

    return res
  },

  async createApplication(data: any) {
    const res: AxiosResponse<IApplicationResponse> = await client.post('/applications', data)

    return res
  },

  async updateApplication(id: string, data: any) {
    const res: AxiosResponse<IApplicationResponse> = await client.put(`/applications/${id}`, data)

    return res
  },

  async deleteApplication(id: string) {
    const res: AxiosResponse<IApplicationResponse> = await client.delete(`/applications/${id}`)

    return res
  },

  async fetchApplicationLogs(id: string) {
    const res: AxiosResponse<IApplicationResponse> = await client.get(`/applications/${id}/logs`)

    return res
  }
}
