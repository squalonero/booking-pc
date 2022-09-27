import { Button } from '@mui/material'
import AvailabilityData from 'components/AvailabilityData/AvailabilityData'
import dayjs from 'dayjs'
import { bookingAvailabilityActions } from 'features/availability/reducer'
import { selectAvailByDay } from 'features/availability/selectors'
import { BookingDto } from 'features/booking/model'
import { Form, useFormikContext } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Config from '../../../Config.json'
import { DateController } from './DateController'
import { PeopleController } from './PeopleController'
import './calendar.css'

const BookingCalendar = () => {
  const dispatch = useDispatch()
  const availByDay = useSelector(selectAvailByDay)
  const formik = useFormikContext<BookingDto>()

  useEffect(() => {
    if (!formik.values.date) return
    dispatch(
      bookingAvailabilityActions.getByDay(dayjs(formik.values.date).format('YYYY-MM-DD'))
    )
  }, [dispatch, formik.values.date])

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="title">App Name</h1>
        <h2 className="subtitle">Prenotazioni</h2>
      </div>

      <div className="mt-5 w-full max-h-max pb-[100px]">
        <Form>
          {
            <DateController
              value={formik.values.date}
              handleChange={(val) =>
                formik.setFieldValue('date', dayjs(val).format('YYYY-MM-DD'))
              }
            />
          }
          {formik.values.date && availByDay && (
            <>
              <AvailabilityData
                selectedDate={formik.values.date}
                availByDay={availByDay}
              />
              {/* <form onSubmit={formik.handleSubmit}> */}
              <div className="mt-5 w-full">
                <PeopleController
                  max={Config.max_people - availByDay.total}
                  handleValue={formik.handleChange}
                  value={formik.values.passengers}
                  onIncrement={() => {
                    formik.setFieldValue('passengers', [
                      ...formik.values.passengers,
                      {
                        name: '',
                        lastName: '',
                        age: null
                      }
                    ])
                  }}
                  onDecrement={() => {
                    formik.values.passengers.pop()
                  }}
                />
              </div>
              <div className=" shadow-top flex fixed bottom-0 justify-between mt-5 bg-white left-0 right-0 py-5 px-10">
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => formik.setFieldValue('date', '')}
                  >
                    Cambia data
                  </Button>
                </div>
                <div>
                  <Button type="submit" variant="contained" color="primary">
                    Prenota
                  </Button>
                </div>
              </div>
              {/* </form> */}
            </>
          )}
        </Form>
      </div>
    </>
  )
}

export default BookingCalendar
