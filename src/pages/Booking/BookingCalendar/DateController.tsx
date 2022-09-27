import { TextField } from '@mui/material'
import { PickersDay, PickersDayProps, StaticDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { bookingAvailabilityActions } from 'features/availability/reducer'
import { selectMappedAvailByMonth } from 'features/availability/selectors'
import { BookingDto } from 'features/booking/model'
import { useFormikContext } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './calendar.css'

type Props = {
  handleChange: (val: Date | null) => void
  value: string
}

export const DateController = ({ handleChange, value }: Props) => {
  const dispatch = useDispatch()
  const monthBookings = useSelector(selectMappedAvailByMonth)
  const [currentDate, setCurrentDate] = useState<string | null>(null)
  const formik = useFormikContext<BookingDto>()

  // const tomorrow = dayjs().add(1, 'day').toDate()
  const today = dayjs().toDate()

  useEffect(() => {
    if (!currentDate) setCurrentDate(dayjs().format('YYYY-MM-DD').toString())
    dispatch(bookingAvailabilityActions.getByMonth(currentDate!))
  }, [dispatch, currentDate])

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
    const freeClass = date > today && !isFull(date) && !isAlmostFull(date) ? 'free' : ''
    const almostFullClass = date > today && isAlmostFull(date) ? 'almost-full' : ''
    const fullClass = date > today && isFull(date) ? 'full' : ''
    return (
      <div key={dayjs(date).unix()}>
        <div className={`${freeClass} ${almostFullClass} ${fullClass}`}>
          <PickersDay {...pickersDayProps} />
        </div>
      </div>
    )
  }

  return (
    <>
      <h2 className="title text-center">Scegli una data</h2>
      <StaticDatePicker<Date>
        displayStaticWrapperAs="desktop" // hides toolbar and dialog actions
        openTo="day"
        views={['day']} // only show day view
        value={value ? dayjs(value).toDate() : null}
        onChange={handleChange}
        shouldDisableDate={(date) => date < today || isFull(date)}
        renderInput={(params) => <TextField {...params} />}
        renderDay={renderDay.bind(this)}
        onMonthChange={(date) =>
          setCurrentDate(dayjs(date).format('YYYY-MM-DD').toString())
        }
      />
      {formik.errors.date}
    </>
  )
}
