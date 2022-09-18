import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BookingAvailabilityContentI {
  _id: Date | null
  total: number
  confirmed: number
  pending: number
}
interface BookingAvailabilityI {
  byDay: BookingAvailabilityContentI
  byMonth: BookingAvailabilityContentI[]
}

const initialState: BookingAvailabilityI = {
  byDay: {
    _id: null,
    total: 0,
    confirmed: 0,
    pending: 0
  },
  byMonth: []
}

const BookingAvailabilitySlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    getByDay: (state, { payload }: PayloadAction<string | null>) => {},
    setByDay: (state, { payload }: PayloadAction<BookingAvailabilityContentI>) => {
      state.byDay = { ...payload }
    },
    getByMonth: (state, { payload }: PayloadAction<string>) => {},
    setByMonth: (state, { payload }: PayloadAction<BookingAvailabilityContentI[]>) => {
      state.byMonth = [...payload]
    }
  }
})

export const bookingAvailabilityActions = BookingAvailabilitySlice.actions
export const bookingAvailabilityReducer = BookingAvailabilitySlice.reducer
