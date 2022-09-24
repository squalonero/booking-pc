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
