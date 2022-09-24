import { DayAvailabilityDto } from 'api/types'

export type AvailabilityDataDto = {
  children?: JSX.Element
  selectedDate: string
  availByDay: DayAvailabilityDto
}
