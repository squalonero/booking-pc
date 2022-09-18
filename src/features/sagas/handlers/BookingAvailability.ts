import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  bookingAvailabilityActions,
  BookingAvailabilityContentI
} from 'features/availability/reducer'
import { call, put } from 'redux-saga/effects'
import {
  requestGetBookingAvailByDay,
  requestGetBookingAvailByMonth
} from '../requests/booking'

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
    yield put(bookingAvailabilityActions.setByDay(data))
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
    yield put(bookingAvailabilityActions.setByMonth(data))
  } catch (error) {
    console.log(error)
  }
}
