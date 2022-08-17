import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BookingState = {
  selectedDate: string | null
}

const initialState: BookingState = {
  selectedDate: null
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
    }
  }
})

export const bookingActions = BookigSlice.actions
export const bookingReducer = BookigSlice.reducer
