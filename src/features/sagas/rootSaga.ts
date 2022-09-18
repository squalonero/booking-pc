import { bookingAvailabilityActions } from 'features/availability/reducer'

import { takeLatest } from 'redux-saga/effects'
import {
  handleGetBookingAvailByDay,
  handleGetBookingAvailByMonth
} from './handlers/BookingAvailability'

export function* watcherSaga() {
  yield takeLatest(bookingAvailabilityActions.getByDay.type, handleGetBookingAvailByDay)

  yield takeLatest(
    bookingAvailabilityActions.getByMonth.type,
    handleGetBookingAvailByMonth
  )
}
