export interface userI {
  email: string
  phone: number
}

export interface customerI {
  name: string
  lastName: string
  age: number
}

export enum statusEnum {
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED'
}

export type BookingDB = {
  id: number
  user: userI
  status: statusEnum
  date: string
  passengers: customerI[]
}

export type BookingDbList = BookingDB[]

export interface BookingAvailabilityContentI {
  _id: Date | null
  total: number
  confirmed: number
  pending: number
}
export interface BookingAvailabilityI {
  byDay: BookingAvailabilityContentI
  byMonth: BookingAvailabilityContentI[]
}
