// import { Button, Container } from '@mui/material'
import AvailabilityData from 'components/AvailabilityData/AvailabilityData'
import BottomBar from 'components/BottomBar/BottomBar'
import dayjs from 'dayjs'
import { bookingAvailabilityActions } from 'features/availability/reducer'
import { selectAvailByDay } from 'features/availability/selectors'
import { BookingDto } from 'features/booking/model'
import { Form, useFormikContext } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Config from '../../../Config.json'
import { DateController } from './DateController'
import { PeopleController } from './PeopleController'
import './calendar.css'

export const BookingCalendar = () => {
  const dispatch = useDispatch()
  const availByDay = useSelector(selectAvailByDay)
  const formik = useFormikContext<BookingDto>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!formik.values.date) return
    dispatch(
      bookingAvailabilityActions.getByDay(dayjs(formik.values.date).format('YYYY-MM-DD'))
    )
  }, [dispatch, formik.values.date])

  function onNext() {
    navigate('/user/registration')
  }

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="title">Pescaturismo Celeste</h1>
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
              <BottomBar onClick={onNext} isSubmit={false} submitLabel="Continua" />
              {/* </form> */}
            </>
          )}
        </Form>
      </div>
    </>
  )
}
