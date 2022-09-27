export interface userI {
  email: string
  phone: number
}

export interface customerI {
  name: string
  lastName: string
  age: number
}

export interface customerDto {
  name: string
  lastName: string
  age: number | null
}

export enum statusEnum {
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED'
}

export interface BookingDto {
  user: userI | {}
  date: string
  passengers: customerDto[] | []
}

export type BookingDB = {
  id: number
  user: userI
  status: statusEnum
  date: string
  passengers: customerI[]
}

export type BookingDbList = BookingDB[]
