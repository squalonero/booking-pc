import { PayloadAction } from '@reduxjs/toolkit'
import { getDayAvailability } from 'api'
import { AxiosResponse } from 'axios'
import { requestGetBookingAvailByMonth } from 'features/availability/requests'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Availability } from './model'
import { bookingAvailabilityActions as a } from './reducer'

/**
 * Call the request function and store the result in the reducer
 */
export function* getAvailabilityByDaySaga({ payload }: ReturnType<typeof a.getByDay>) {
  try {
    // optional. Needed if we want to pass data to the request function
    // yield works like async/await. It waits for the result of the function and then continues

    const { data }: AxiosResponse<Availability> = yield call(getDayAvailability, payload)

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
    const response: AxiosResponse<Availability[]> = yield call(
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
  yield takeLatest(a.getByDay.type, getAvailabilityByDaySaga)
  yield takeLatest(a.getByMonth.type, handleGetBookingAvailByMonth)
}
