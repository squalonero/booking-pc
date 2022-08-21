import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'features/store'

const selectDbBookings = ({ availableBookings }: RootState) => availableBookings

export const selectDbBooked = createSelector(
  selectDbBookings,
  ({ total, confirmed, pending }) => ({
    total,
    confirmed,
    pending
  })
)
