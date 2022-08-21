import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BookingAvailabilityI {
  total: number
  confirmed: number
  pending: number
}

const initialState: BookingAvailabilityI = {
  total: 0,
  confirmed: 0,
  pending: 0
}

const BookingAvailabilitySlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    getBookingAvailability: (state, { payload }: PayloadAction<string | null>) => {},
    setBookingAvailability: (state, { payload }: PayloadAction<BookingAvailabilityI>) => {
      state = { ...payload }
    }
  }
})

export const bookingAvailabilityActions = BookingAvailabilitySlice.actions
export const bookingAvailabilityReducer = BookingAvailabilitySlice.reducer
