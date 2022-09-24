import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'features/store'
import { MonthlyAvailability } from './model'

const selectDbBookings = ({ availableBookings }: RootState) => availableBookings

export const selectAvailByDay = createSelector(selectDbBookings, ({ byDay }) => byDay)

export const selectAvailByMonth = createSelector(
  selectDbBookings,
  ({ byMonth }) => byMonth
)

export const selectMappedAvailByMonth = createSelector(
  selectDbBookings,
  ({ byMonth }) => {
    const ret = byMonth.reduce(
      (acc, availDate) => {
        const { total, _id } = availDate
        return {
          almostFull: [...acc.almostFull, ...(total >= 10 ? [_id] : [])],
          full: [...acc.full, ...(total == 15 ? [_id] : [])]
        }
      },
      { almostFull: [], full: [] } as any
    )
    return ret as MonthlyAvailability
  }
)
