import { Box, Container } from '@mui/system'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import it from 'dayjs/locale/it'
import { BookingDto, submitBooking } from 'features/booking/model'
import { bookingActions } from 'features/booking/reducer'
import { selectBookingId } from 'features/booking/selectors'
import { Formik } from 'formik'
import { BookingCalendar } from 'pages/Booking/BookingCalendar'
import { BookingSchema } from 'pages/Booking/BookingCalendar/validation'
import ThankyouPage from 'pages/Booking/ThankyouPage'
import { UserRegistration } from 'pages/Booking/UserRegistration'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'

export const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formInitialValues: BookingDto = {
    user: {},
    date: '',
    passengers: [
      {
        name: '',
        lastName: '',
        age: null
      }
    ]
  }

  // useEffect(() => {
  //   if (!selectBookingId) return
  //   navigate('/booking/success')
  // }, [navigate, selectBookingId])

  const submitStoreBooking = (data: submitBooking) => {
    dispatch(bookingActions.storeBooking(data))
    if (!selectBookingId) navigate('/booking/retry')
    else navigate('/booking/success')
  }

  return (
    <LocalizationProvider adapterLocale={it} dateAdapter={AdapterDayjs}>
      {/* <div className="w-[calc(100%_-_6rem)] min-h-screen mx-[3rem]"> */}
      {/* <div className="flex flex-col py-10 items-center h-full w-full mx-auto"> */}
      <Container maxWidth="xs">
        <Box sx={{ py: 3 }}>
          <Formik
            initialValues={formInitialValues}
            validationSchema={BookingSchema}
            onSubmit={(values) => submitStoreBooking({ form: values, navigate })}
          >
            {(formik) => (
              // console.log('FORMIK', formik),
              <Routes>
                <Route path="/" element={<BookingCalendar />} />
                <Route path="/user/registration" element={<UserRegistration />} />
                <Route path="/booking/success" element={<ThankyouPage />} />
                <Route path="/booking/error" element={<>Error</>} />
              </Routes>
            )}
          </Formik>
        </Box>
      </Container>
      {/* </div> */}
      {/* </div> */}
    </LocalizationProvider>
  )
}
