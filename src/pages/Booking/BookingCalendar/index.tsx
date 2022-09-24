import { Button } from '@mui/material'
import AvailabilityData from 'components/AvailabilityData/AvailabilityData'
import dayjs from 'dayjs'
import { bookingAvailabilityActions } from 'features/availability/reducer'
import { selectAvailByDay } from 'features/availability/selectors'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Config from '../../../Config.json'
import { DateController } from './DateController'
import { PeopleController } from './PeopleController'
import './calendar.css'

const BookingCalendar = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(selectSelectedDate)
  const availByDay = useSelector(selectAvailByDay)

  useEffect(() => {
    if (!selectedDate) return
    dispatch(
      bookingAvailabilityActions.getByDay(dayjs(selectedDate).format('YYYY-MM-DD'))
    )
  }, [dispatch, selectedDate])

  const resetDate = () => {
    dispatch(bookingActions.setSelectedDate(''))
  }

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-lg font-bold text-blue-500">App Name</h1>
        <h2 className="text-sm font-bold text-blue-900">Prenotazioni</h2>
      </div>

      <div className="mt-5 w-full">
        {!selectedDate && <DateController />}
        {selectedDate && availByDay && (
          <>
            <AvailabilityData selectedDate={selectedDate} availByDay={availByDay} />
            <div className="mt-5 w-full">
              <PeopleController max={Config.max_people} />
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <Button variant="outlined" color="primary" onClick={resetDate}>
                  Cambia data
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Prenota
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default BookingCalendar
