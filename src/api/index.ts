import { apiClient } from './client'
import { DayAvailabilityDto } from './types'

export const getDayAvailability = (date: string) => {
  return apiClient.get<DayAvailabilityDto>(`/booking/getDayAvailability?date=${date}`)
}
