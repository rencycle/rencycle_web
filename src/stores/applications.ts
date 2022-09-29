import { useApplications } from '@/services/application'
import type {
  IApplicationCreate,
  IApplicationReport,
  IApplicationResponse,
  ICompany,
  IFacility,
  INomenklature,
  ITransport
} from '@/types'
import { defineStore } from 'pinia'

export const useApplicationsStore = defineStore({
  id: 'applications',
  state: () => ({
    applications: [] as IApplicationResponse[],
    reports: [] as IApplicationReport[],
    facilities: [] as IFacility[],
    companies: [] as ICompany[],
    nomenklatures: [] as INomenklature[],
    transports: [] as ITransport[]
  }),
  getters: {
    getApplications(): IApplicationResponse[] {
      return this.applications
    }
  },
  actions: {
    async fetchApplications() {
      const res = await useApplications.fetchApplications()

      this.applications = res.data
    },

    async fetchApplicationReports(params = '') {
      const res = await useApplications.fetchApplicationReports(params)

      this.reports = res.data
    },

    async fetchFacilities() {
      const res = await useApplications.fetchFacilities()

      this.facilities = res.data
    },

    async fetchCompanies() {
      const res = await useApplications.fetchCompanies()

      this.companies = res.data
    },

    async fetchNomenklatures() {
      const res = await useApplications.fetchNomenklatures()

      this.nomenklatures = res.data
    },

    async fetchTransports() {
      const res = await useApplications.fetchTransports()

      this.transports = res.data
    },

    async createApplication(payload: IApplicationCreate) {
      const res = await useApplications.createApplication(payload)

      this.applications.push(res.data)

      return res
    }
  }
})
