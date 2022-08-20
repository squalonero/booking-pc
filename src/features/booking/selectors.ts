import { createSelector } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { RootState } from 'features/store'

// restringiamo il selettore alla fetta di stato 'Booking'
/**
 * Get the state from the rootState in store.js
 */
const selectBooking = ({ booking }: RootState) => booking

export const selectSelectedDate = createSelector(selectBooking, ({ selectedDate }) =>
  dayjs(selectedDate).toDate()
)

export const selectSelectedPeople = createSelector(
  selectBooking,
  ({ selectedPeople }) => selectedPeople
)
