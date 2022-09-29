export enum ECompanyType {
  LOGISTICS = 'logistics',
  OTHER = 'other'
}

export enum ENomenklatureType {
  LIQUID = 'liquid',
  SOLID = 'solid'
}

export enum ETansportStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
  IN_TRANSIT = 'in_transit'
}

export enum EUserType {
  ECOLOGUE = 'ecologue',
  AUDITOR = 'auditor',
  TECH = 'tech',
  RECYCLER = 'recycler',
  DRIVER = 'driver'
}

export enum EApplicationStatus {
  PENDING = 'pending',
  TECH_ACCEPTED = 'tech_accepted',
  TECH_REJECTED = 'tech_rejected',
  DRIVER_RECEIVED = 'driver_received',
  DRIVER_REJECTED = 'driver_delivered',
  RECYCLER_PLACED = 'recycler_placed',
  RECYCLER_PROCESSED = 'recycler_processed'
}

export interface IApplicationResponse {}

export interface IApplicationReport {
  nomenklature: INomenklature
  nomenklature_amount: number
  from: string
  to: string
  sender_facility: IFacility
  receiver_facility: IFacility
  recycling_method: string
}

export interface IUser {
  id: number
  email: string
  password: string
  first_name: string
  last_name: string
  facility_id: 0
  role: EUserType
  phone_number: string
  access_token?: string
}

export interface ICompany {
  id: 7
  name: string
  address: string
  phone_number: string
  email: string
  company_type: ECompanyType
}

export interface IFacility {
  id: number
  company: ICompany
  name: string
  address: string
}

export interface INomenklature {
  id: number
  name: string
  nomenklature_type: ENomenklatureType
}

export interface ITransport {
  id: number
  company: ICompany
  rencycle_user: IUser
  number: string
  model: string
  status: ETansportStatus
}

export interface IApplicationCreate {
  receiver_facility: IFacility['id']
  transport: ITransport['id']
  nomenklature: INomenklature['id']
  nomenklature_amount: number
}
