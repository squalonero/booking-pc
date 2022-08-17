import { TextField } from '@mui/material'
import { StaticDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BookingCalendar = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(selectSelectedDate)

  const handleChange = useCallback(
    (value: Date | null) => {
      console.log('clicked', value)
      if (!value) dispatch(bookingActions.resetSelectedDate())
      else dispatch(bookingActions.setSelectedDate(value.toISOString()))
    },
    [dispatch]
  )

  const tomorrow = dayjs().add(0, 'day').toDate()
  return (
    <div className="mx-auto">
      <div className="text-center">
        <h1 className="text-lg font-bold text-blue-500">Pescaturismo Celeste</h1>
        <h2 className="text-sm font-bold text-blue-900">Prenotazioni</h2>
      </div>

      <StaticDatePicker<Date>
        orientation="portrait"
        openTo="day"
        value={selectedDate}
        onChange={handleChange}
        shouldDisableDate={(date) => date < tomorrow}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  )
}

export default BookingCalendar
