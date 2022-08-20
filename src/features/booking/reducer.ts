import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BookingAvailabilityI {
  total: number | null
  confirmed: number | null
  pending: number | null
}

type BookingState = {
  selectedDate: string | null
  selectedPeople: number
  bookedSeats: BookingAvailabilityI
}

const initialState: BookingState = {
  selectedDate: null,
  selectedPeople: 1,
  bookedSeats: {
    total: null,
    confirmed: null,
    pending: null
  }
}

const BookigSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedDate: (state, { payload }: PayloadAction<string>) => {
      state.selectedDate = payload
    },
    resetSelectedDate: (state) => {
      state.selectedDate = null
    },
    increaseNumPeople: (state) => {
      state.selectedPeople++
    },
    decreaseNumPeople: (state) => {
      if (state.selectedPeople > 1) state.selectedPeople--
    },
    getBookingAvailability: (state, { payload }: PayloadAction<string | null>) => {},
    setBookingAvailability: (state, { payload }: PayloadAction<BookingAvailabilityI>) => {
      state.bookedSeats = { ...payload }
    }
  }
})

export const bookingActions = BookigSlice.actions
export const bookingReducer = BookigSlice.reducer
