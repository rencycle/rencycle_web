import type { IApplicationResponse } from '@/types'
import { defineStore } from 'pinia'

export const useApplicationsStore = defineStore({
  id: 'applications',
  state: () => ({
    applications: [] as IApplicationResponse[]
  }),
  getters: {
    getApplications(): IApplicationResponse[] {
      return this.applications
    }
  },
  actions: {
    async fetchApplications() {
      // fetch applications from the api
      // and set the applications state
    }
  }
})
