import { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { BookingDB } from './model'
import { bookingActions as a } from './reducer'
import { storeBookingApiRequest } from './requests'

function* storeBookingSaga({ payload }: ReturnType<typeof a.storeBooking>) {
  try {
    const { form, navigate } = payload
    const { data, status }: AxiosResponse<BookingDB> = yield call(
      storeBookingApiRequest,
      form
    )
    if (status !== 200) navigate('booking/error')

    yield put(a.storeBookingSuccess(data._id))
    navigate('booking/success')
  } catch (e) {
    console.error('storeBookingSaga Error: ', e)
    alert('an error occurred')
  }
}

export function* bookingSaga() {
  yield takeEvery(a.storeBooking.type, storeBookingSaga)
}
