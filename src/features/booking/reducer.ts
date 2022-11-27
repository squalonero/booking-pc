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
    },
    setPassengerName: (
      state,
      { payload }: PayloadAction<{ index: number; name: string }>
    ) => {
      state.passengers[payload.index].name = payload.name
    },
    setPassengerLastName: (
      state,
      { payload }: PayloadAction<{ index: number; lastName: string }>
    ) => {
      state.passengers[payload.index].lastName = payload.lastName
    },
    setPassengerAge: (
      state,
      { payload }: PayloadAction<{ index: number; age: number | null }>
    ) => {
      state.passengers[payload.index].age = payload.age
    }
  }
})

export const bookingActions = BookigSlice.actions
export const bookingReducer = BookigSlice.reducer
