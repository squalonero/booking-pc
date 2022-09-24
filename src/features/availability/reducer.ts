import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'
import { Availability, BookingAvailabilityI } from './model'

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
  name: 'availability',
  initialState,
  reducers: {
    setByDay: (state, { payload }: PayloadAction<Availability>) => {
      state.byDay = { ...payload }
    },
    setByMonth: (state, { payload }: PayloadAction<Availability[]>) => {
      state.byMonth = [...payload]
    }
  }
})

export const bookingAvailabilityActions = {
  ...BookingAvailabilitySlice.actions,
  getByDay: createAction<string>('availability/getByDay'),
  getByMonth: createAction<string>('availability/getByMonth')
}
export const bookingAvailabilityReducer = BookingAvailabilitySlice.reducer
