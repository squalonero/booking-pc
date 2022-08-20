import { TextField } from '@mui/material'
import { StaticDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DateController = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(selectSelectedDate)
  const tomorrow = dayjs().add(0, 'day').toDate()

  const handleChange = useCallback(
    (value: Date | null) => {
      if (!value) dispatch(bookingActions.resetSelectedDate())
      else dispatch(bookingActions.setSelectedDate(dayjs(value).format('YYYY-MM-DD')))
    },
    [dispatch]
  )

  useEffect(() => {
    console.log(selectedDate)
    if (selectedDate) {
      dispatch(
        bookingActions.getBookingAvailability(dayjs(selectedDate).format('YYYY-MM-DD'))
      )
    }
  }, [dispatch])

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
