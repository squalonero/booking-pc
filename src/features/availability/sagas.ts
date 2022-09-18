import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  requestGetBookingAvailByDay,
  requestGetBookingAvailByMonth
} from 'features/availability/requests'
import { call, put, takeLatest } from 'redux-saga/effects'
import { BookingAvailabilityContentI } from './model'
import { bookingAvailabilityActions as a } from './reducer'

/**
 * Call the request function and store the result in the reducer
 */
export function* handleGetBookingAvailByDay(action: PayloadAction<string>) {
  try {
    // optional. Needed if we want to pass data to the request function
    const { payload } = action
    // yield works like async/await. It waits for the result of the function and then continues

    const response: AxiosResponse<BookingAvailabilityContentI> = yield call(
      requestGetBookingAvailByDay,
      payload
    )

    const { data } = response
    if (!data._id) return
    yield put(a.setByDay(data))
  } catch (error) {
    console.log(error)
  }
}

export function* handleGetBookingAvailByMonth(action: PayloadAction<string>) {
  try {
    // optional. Needed if we want to pass data to the request function
    const { payload } = action
    // yield works like async/await. It waits for the result of the function and then continues
    const response: AxiosResponse<BookingAvailabilityContentI[]> = yield call(
      requestGetBookingAvailByMonth,
      payload
    )

    const { data } = response
    if (!data.length) return

    // call the reducer and set the state
    yield put(a.setByMonth(data))
  } catch (error) {
    console.log(error)
  }
}

export function* availabilitySaga() {
  yield takeLatest(a.getByDay.type, handleGetBookingAvailByDay)

  yield takeLatest(a.getByMonth.type, handleGetBookingAvailByMonth)
}
