import { PayloadAction } from '@reduxjs/toolkit'
import {
  bookingAvailabilityActions,
  BookingAvailabilityI
} from 'features/models/bookings/reducer'
import { call, put } from 'redux-saga/effects'
import { requestGetBookingAvailability } from '../requests/booking'

interface userI {
  email: string
  phone: number
}

interface customerI {
  name: string
  lastName: string
  age: number
}

enum statusEnum {
  confirmed = 'confirmed',
  pending = 'pending',
  cancelled = 'cancelled'
}

export type BookingDB = {
  id: number
  user: userI
  status: statusEnum
  date: string
  numPeople: number
  people: customerI[]
}

/**
 * Call the request function and store the result in the reducer
 */
export function* handleGetBookingAvailability(action: PayloadAction<string>) {
  try {
    // optional. Needed if we want to pass data to the request function
    const { payload } = action
    // yield works like async/await. It waits for the result of the function and then continues
    // @ts-ignore
    const response = yield call(requestGetBookingAvailability, payload)
    const { data } = response
    if (!data.length) return

    const result = data.reduce(
      (acc: BookingAvailabilityI, item: BookingDB) => {
        return {
          total: acc.total + item.numPeople,
          confirmed:
            item.status === 'confirmed' ? acc.confirmed + item.numPeople : acc.confirmed,
          pending: item.status === 'pending' ? acc.pending + item.numPeople : acc.pending
        }
      },
      { total: 0, confirmed: 0, pending: 0 }
    )
    yield put(bookingAvailabilityActions.setBookingAvailability(result))
  } catch (error) {
    console.log(error)
  }
}
