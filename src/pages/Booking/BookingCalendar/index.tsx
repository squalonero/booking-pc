import { Button } from '@mui/material'
import dayjs from 'dayjs'
import { selectSelectedDate } from 'features/booking/selectors'
import { bookingAvailabilityActions } from 'features/models/bookings/reducer'
import { selectDbBooked } from 'features/models/bookings/selectors'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Config from './config.json'
import { DateController } from './DateController'
import { PeopleController } from './PeopleController'

const BookingCalendar = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(selectSelectedDate)
  const selectBooked = useSelector(selectDbBooked)

  useEffect(() => {
    if (!selectedDate) return
    dispatch(
      bookingAvailabilityActions.getBookingAvailability(
        dayjs(selectedDate).format('YYYY-MM-DD')
      )
    )
  }, [dispatch, selectedDate])

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-lg font-bold text-blue-500">Pescaturismo Celeste</h1>
        <h2 className="text-sm font-bold text-blue-900">Prenotazioni</h2>
      </div>

      <div className="mt-5 w-full">
        {!selectedDate && <DateController />}
        {selectedDate && selectBooked && (
          <>
            <h4 className="flex justify-between">
              <span className="text-gray-500">Data selezionata:</span>
              <span>{dayjs(selectedDate).format('DD-MM-YYYY')}</span>
            </h4>
            <div className="flex justify-between">
              <div className="text-gray-500">Posti liberi:</div>
              <div>
                {Config.max_people - selectBooked.confirmed}/{Config.max_people}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-5 w-full">
        {selectedDate && <PeopleController max={Config.max_people} />}
      </div>

      <div className="flex justify-center mt-auto">
        <Button variant="contained" color="primary">
          Prenota
        </Button>
      </div>
    </>
  )
}

export default BookingCalendar
