import { TextField } from '@mui/material'
import { PickersDay, PickersDayProps, StaticDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { bookingAvailabilityActions } from 'features/availability/reducer'
import { selectMappedAvailByMonth } from 'features/availability/selectors'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './calendar.css'

export const DateController = () => {
  const dispatch = useDispatch()
  const monthBookings = useSelector(selectMappedAvailByMonth)
  const selectedDate = useSelector(selectSelectedDate)
  // const tomorrow = dayjs().add(1, 'day').toDate()
  const today = dayjs().toDate()

  useEffect(() => {
    const currentDate = dayjs().format('YYYY-MM-DD').toString()
    dispatch(bookingAvailabilityActions.getByMonth(currentDate))
  }, [dispatch])

  const handleChange = useCallback(
    (value: Date | null) => {
      if (!value) dispatch(bookingActions.resetSelectedDate())
      else dispatch(bookingActions.setSelectedDate(dayjs(value).format('YYYY-MM-DD')))
    },
    [dispatch]
  )

  const isAlmostFull = (date: Date) => {
    const day = dayjs(date).format('YYYY-MM-DD')
    return monthBookings.almostFull.includes(day)
  }
  const isFull = (date: Date) => {
    const day = dayjs(date).format('YYYY-MM-DD')
    return monthBookings.full.includes(day)
  }

  const renderDay = (
    date: Date,
    selectedDays: Date[],
    pickersDayProps: PickersDayProps<Date>
  ) => {
    const almostFullClass = date > today && isAlmostFull(date) ? 'almost-full' : ''
    const fullClass = date > today && isFull(date) ? 'full' : ''
    return (
      <div key={dayjs(date).unix()}>
        <div className={`${almostFullClass} ${fullClass}`}>
          <PickersDay {...pickersDayProps} />
        </div>
      </div>
    )
  }

  return (
    <StaticDatePicker<Date>
      displayStaticWrapperAs="desktop" // hides toolbar and dialog actions
      openTo="day"
      views={['day']} // only show day view
      value={selectedDate ? dayjs(selectedDate).toDate() : null}
      onChange={handleChange}
      shouldDisableDate={(date) => date < today}
      renderInput={(params) => <TextField {...params} />}
      renderDay={renderDay.bind(this)}
    />
  )
}
