import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'features/store'

const selectDbBookings = ({ availableBookings }: RootState) => availableBookings

export const selectAvailByDay = createSelector(selectDbBookings, ({ byDay }) => byDay)

export const selectAvailByMonth = createSelector(
  selectDbBookings,
  ({ byMonth }) => byMonth
)
