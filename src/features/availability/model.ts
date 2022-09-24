import { DayAvailabilityDto } from 'api/types'

export type Availability = DayAvailabilityDto
export interface BookingAvailabilityI {
  byDay: Availability
  byMonth: Availability[]
}

export type MonthlyAvailability = {
  almostFull: string[]
  full: string[]
}
