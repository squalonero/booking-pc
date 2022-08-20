import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BookingState = {
  selectedDate: string | null
  selectedPeople: number
}

const initialState: BookingState = {
  selectedDate: null,
  selectedPeople: 1
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
    }
  }
})

export const bookingActions = BookigSlice.actions
export const bookingReducer = BookigSlice.reducer
