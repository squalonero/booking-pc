import { Box, Container } from '@mui/system'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import it from 'dayjs/locale/it'
import { BookingDto } from 'features/booking/model'
import { Formik } from 'formik'

import { BookingCalendar } from 'pages/Booking/BookingCalendar'
import { BookingSchema } from 'pages/Booking/BookingCalendar/validation'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { UserRegistration } from 'pages/Booking/UserRegistration'

export const App = () => {
  const navigate = useNavigate()
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

  return (
    <LocalizationProvider adapterLocale={it} dateAdapter={AdapterDayjs}>
      {/* <div className="w-[calc(100%_-_6rem)] min-h-screen mx-[3rem]"> */}
      {/* <div className="flex flex-col py-10 items-center h-full w-full mx-auto"> */}
      <Container maxWidth="xs">
        <Box sx={{ py: 3 }}>
          <Formik
            initialValues={formInitialValues}
            validationSchema={BookingSchema}
            onSubmit={(values) => {
              console.debug('FORM SUBMIT')
              console.debug('formik values', values)
              navigate('/user/registration')
            }}
          >
            {(formik) => (
              console.log('FORMIK', formik),
              (
                <Routes>
                  <Route path="/" element={<BookingCalendar />} />
                  <Route path="/user/registration" element={<UserRegistration />} />
                </Routes>
              )
            )}
          </Formik>
        </Box>
      </Container>
      {/* </div> */}
      {/* </div> */}
    </LocalizationProvider>
  )
}
