import { bookingAvailabilityActions } from 'features/models/bookings/reducer'
import { takeLatest } from 'redux-saga/effects'
import { handleGetBookingAvailability } from './handlers/booking'

export function* watcherSaga() {
  yield takeLatest(
    bookingAvailabilityActions.getBookingAvailability.type,
    handleGetBookingAvailability
  )
}
