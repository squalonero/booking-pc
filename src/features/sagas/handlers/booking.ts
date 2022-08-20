import { bookingActions } from 'features/booking/reducer'
import { call, put } from 'redux-saga/effects'
import { requestGetBookingAvailability } from '../requests/booking'

/**
 * Call the request function and store the result in the reducer
 */
// @ts-ignore
export function* handleGetBookingAvailability(action) {
  try {
    // optional. Needed if we want to pass data to the request function
    const { payload } = action
    // yield works like async/await. It waits for the result of the function and then continues
    // @ts-ignore
    const response = yield call(requestGetBookingAvailability, payload)
    const { data } = response
    console.table(data)
    yield put(bookingActions.setBookingAvailability(data))
  } catch (error) {
    console.log(error)
  }
}
