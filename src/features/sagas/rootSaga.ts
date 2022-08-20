import { bookingActions } from 'features/booking/reducer'
import { takeLatest } from 'redux-saga/effects'
import { handleGetBookingAvailability } from './handlers/booking'

export function* watcherSaga() {
  yield takeLatest(
    bookingActions.getBookingAvailability.type,
    handleGetBookingAvailability
  )
}
