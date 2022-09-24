import { TextField } from '@mui/material'
import { PickersDay, PickersDayProps, StaticDatePicker } from '@mui/x-date-pickers'
import { PickerSelectionState } from '@mui/x-date-pickers/internals'
import dayjs from 'dayjs'
import { MonthlyAvailability } from 'features/availability/model'
import { bookingAvailabilityActions } from 'features/availability/reducer'
import { selectMappedAvailByMonth } from 'features/availability/selectors'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './calendar.css'

export const DateController = () => {
  const dispatch = useDispatch()
  const monthBookings = useSelector(selectMappedAvailByMonth)
  const selectedDate = useSelector(selectSelectedDate)
  const tomorrow = dayjs().add(0, 'day').toDate()

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

  console.log('mb', monthBookings)

  /**
   * @TODO: color dates based on availability. Custom hook?
   */

  const renderDay = (
    date: Date,
    selectedDays: Date[],
    pickersDayProps: PickersDayProps<Date>
  ) => {
    // console.log('date', dayjs(date).format('YYYY-MM-DD'))
    // console.log(monthBookings.almostFull)
    const almostFullClass = monthBookings.almostFull.includes(
      dayjs(date).format('YYYY-MM-DD')
    )
      ? 'almost-full'
      : ''
    const fullClass = monthBookings.full.includes(dayjs(date).format('YYYY-MM-DD'))
      ? 'full'
      : ''

    return (
      <div className={`${almostFullClass} ${fullClass}`} key={dayjs(date).unix()}>
        <PickersDay {...pickersDayProps} />
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
      shouldDisableDate={(date) => date < tomorrow}
      renderInput={(params) => <TextField {...params} />}
      renderDay={renderDay.bind(this)}
      // renderDay={(
      //   day: Date,
      //   selectedDays: Array<Date | null>,
      //   pickersDayProps: PickersDayProps<Date>
      // ) => (
      //   <>
      //     <span key={day.toString()}>
      //       <PickersDay
      //         day={day}
      //         onDaySelect={function (day: Date, isFinish: PickerSelectionState): void {
      //           throw new Error('Function not implemented.')
      //         }}
      //         outsideCurrentMonth={false}
      //       />
      //     </span>
      //   </>
      // )}
    />
  )
}
