import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import { bookingAvailabilityReducer } from './availability/reducer'
import { availabilitySaga } from './availability/sagas'
import { bookingReducer } from './booking/reducer'

// Create the store builded with all slices
// this rootReducer contains all the 'mini' reducers
const rootReducer = {
  booking: bookingReducer,
  availableBookings: bookingAvailabilityReducer
}

function* rootSaga() {
  yield all([availabilitySaga()])
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware] // we can add more middlewares here

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<typeof rootReducer[K]>
}
