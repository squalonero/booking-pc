import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { bookingReducer } from './booking/reducer'
import { bookingAvailabilityReducer } from './models/bookings/reducer'
import { watcherSaga } from './sagas/rootSaga'

// Create the store builded with all slices
// this rootReducer contains all the 'mini' reducers
const rootReducer = {
  booking: bookingReducer,
  availableBookings: bookingAvailabilityReducer
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware] // we can add more middlewares here

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(watcherSaga)

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<typeof rootReducer[K]>
}
