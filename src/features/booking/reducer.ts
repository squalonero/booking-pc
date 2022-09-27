import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { customerDto } from './model'

export type BookingState = {
  selectedDate: string | null
  selectedPeople: number
  passengers: customerDto[]
}

const initialState: BookingState = {
  selectedDate: null,
  selectedPeople: 1,
  passengers: []
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
      state.passengers = []
    },
    increaseNumPeople: (state) => {
      state.selectedPeople++
      state.passengers.push({ name: '', lastName: '', age: null })
    },
    decreaseNumPeople: (state) => {
      if (state.selectedPeople > 1) {
        state.selectedPeople--
        state.passengers.pop()
      }
    }
  }
})

export const bookingActions = BookigSlice.actions
export const bookingReducer = BookigSlice.reducer
