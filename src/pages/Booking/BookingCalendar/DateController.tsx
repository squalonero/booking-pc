import { TextField } from '@mui/material'
import { PickersDay, PickersDayProps, StaticDatePicker } from '@mui/x-date-pickers'
import { PickerSelectionState } from '@mui/x-date-pickers/internals'
import dayjs from 'dayjs'
import { bookingAvailabilityActions } from 'features/availability/reducer'
import { selectAvailByMonth } from 'features/availability/selectors'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DateController = () => {
  const dispatch = useDispatch()
  const monthBookings = useSelector(selectAvailByMonth)
  const selectedDate = useSelector(selectSelectedDate)
  const tomorrow = dayjs().add(0, 'day').toDate()

  const [daysWithDot, setDaysWithDot] = useState([])

  useEffect(() => {
    const currentDate = dayjs().format('YYYY-MM-DD').toString()
    dispatch(bookingAvailabilityActions.getByMonth(currentDate))
    console.log(monthBookings)
  }, [dispatch])

  const handleChange = useCallback(
    (value: Date | null) => {
      if (!value) dispatch(bookingActions.resetSelectedDate())
      else dispatch(bookingActions.setSelectedDate(dayjs(value).format('YYYY-MM-DD')))
    },
    [dispatch]
  )

  /**
   * @TODO: color dates based on availability
   */

  // const renderDay = (
  //   date: Date,
  //   selectedDate: Date,
  //   dayInCurrentMonth: Array<Date | null>,
  //   dayComponent: JSX.Element
  // ) => {
  //   if (daysWithDot.includes(date.format('YYYY-MM-DD'))) {
  //     return (
  //       <div className="">
  //         {dayComponent}
  //         <div className={classes.dayWithDot} />
  //       </div>
  //     )
  //   }

  //   return dayComponent
  // }

  return (
    <StaticDatePicker<Date>
      displayStaticWrapperAs="desktop" // hides toolbar and dialog actions
      openTo="day"
      views={['day']} // only show day view
      value={selectedDate ? dayjs(selectedDate).toDate() : null}
      onChange={handleChange}
      shouldDisableDate={(date) => date < tomorrow}
      renderInput={(params) => <TextField {...params} />}
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
