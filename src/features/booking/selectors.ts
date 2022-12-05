import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'features/store'

// restringiamo il selettore alla fetta di stato 'Booking'
/**
 * Get the state from the rootState in store.js
 */
const selectBooking = ({ booking }: RootState) => booking

/**
 * Serve piece of states
 * we can manipulate the state with this selector before sending it to the component
 */

export const selectSelectedDate = createSelector(
  selectBooking,
  ({ selectedDate }) => selectedDate
)

export const selectSelectedPeople = createSelector(
  selectBooking,
  ({ selectedPeople }) => selectedPeople
)

export const selectBookingId = createSelector(selectBooking, ({ bookingId }) => bookingId)
