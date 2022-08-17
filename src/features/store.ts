import { configureStore } from '@reduxjs/toolkit'
import { bookingReducer } from './booking/reducer'

// Create the store builded with all slices
// this rootReducer contains all the 'mini' reducers
const rootReducer = {
  booking: bookingReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<typeof rootReducer[K]>
}
