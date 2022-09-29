import type { AxiosResponse } from 'axios'
import type {
  IApplicationCreate,
  IApplicationReport,
  IApplicationResponse,
  ICompany,
  IFacility,
  INomenklature,
  ITransport
} from '@/types'
import { client } from './api'

export const useApplications = {
  /**
   * Fetches all applications
   * @returns a list of applications
   */
  async fetchApplications() {
    const res: AxiosResponse<IApplicationResponse[]> = await client.get('api/get_orders/')

    return res
  },
  /**
   * Fetches a single application by id
   * @param id - application id
   * @returns A single application
   */
  async fetchApplication(id: string) {
    const res: AxiosResponse<IApplicationResponse> = await client.get(`api/get_orders/${id}`)

    return res
  },

  /**
   * Creates a new application
   * @param payload - application payload
   * @returns - A new application
   */
  async createApplication(payload: IApplicationCreate) {
    const res: AxiosResponse<IApplicationCreate> = await client.post('api/orders/create_order/', payload)

    return res
  },

  /**
   * Fetches applications reports
   * @param params - filter params
   * @returns - report depending on params
   */
  async fetchApplicationReports(params: string): Promise<AxiosResponse<IApplicationReport[]>> {
    const res: AxiosResponse<IApplicationReport[]> = await client.get('api/reports/' + params)

    return res
  },

  /**
   * Fetches all facilities
   * @returns - list of facilities
   */
  async fetchFacilities(): Promise<AxiosResponse<IFacility[]>> {
    const res: AxiosResponse<IFacility[]> = await client.get('api/get_facilities/')

    return res
  },

  /**
   * Fetches all companies
   * @returns - list of companies
   */
  async fetchCompanies(): Promise<AxiosResponse<ICompany[]>> {
    const res: AxiosResponse<ICompany[]> = await client.get('api/get_companies/')

    return res
  },

  /**
   * Fetches all nomenklatures
   * @returns - list of nomenklatures
   */
  async fetchNomenklatures(): Promise<AxiosResponse<INomenklature[]>> {
    const res: AxiosResponse<INomenklature[]> = await client.get('api/get_nomenklatures/')

    return res
  },

  /**
   * Fetch all transports
   * @returns - list of transports
   */
  async fetchTransports(): Promise<AxiosResponse<ITransport[]>> {
    const res: AxiosResponse<ITransport[]> = await client.get('api/get_transports/')

    return res
  }
}
