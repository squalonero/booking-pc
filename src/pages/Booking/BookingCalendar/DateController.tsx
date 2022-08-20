import { TextField } from '@mui/material'
import { StaticDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DateController = () => {
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
    <StaticDatePicker<Date>
      displayStaticWrapperAs="desktop" // hides toolbar and dialog actions
      openTo="day"
      views={['day']} // only show day view
      value={selectedDate}
      onChange={handleChange}
      shouldDisableDate={(date) => date < tomorrow}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}
