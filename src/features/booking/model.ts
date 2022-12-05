import { NavigateFunction } from "react-router-dom"

export interface userI {
  email: string
  phone: number
}
export interface unserInterfaceDB {
  _id: string
  email: string
  phone: number
  __v: number
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
  CANCELLED = 'CANCELLED',
  PENDING_EMAIL_CONFIRMATION = 'PENDING_EMAIL_CONFIRMATION'
}

export interface BookingErrors {
  passengers: customerDto[]
}

export interface BookingDto {
  user: userI | {}
  date: string
  passengers: customerDto[] | []
}

export type BookingDB = {
  _id: string
  __v: number
  user: unserInterfaceDB
  status: statusEnum
  date: string
  passengers: customerI[]
}

export type BookingDbList = BookingDB[]

export type submitBooking = {
  form: BookingDto
  navigate: NavigateFunction
}
