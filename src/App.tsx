import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import it from 'dayjs/locale/it'
import { BookingDto } from 'features/booking/model'
import { Formik } from 'formik'
import { MuiTheme } from 'MuiTheme'

import BookingCalendar from 'pages/Booking/BookingCalendar'
import { BookingSchema } from 'pages/Booking/BookingCalendar/validation'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
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
      <div className="w-[calc(100%_-_6rem)] min-h-screen mx-[3rem]">
        <div className="flex flex-col py-10 items-center h-full w-full mx-auto">
          <Formik
            initialValues={formInitialValues}
            validationSchema={BookingSchema}
            onSubmit={(values) => {
              console.debug('formik values', values)
            }}
          >
            {({ errors, ...formik }) => (
              <Routes>
                <Route path="/" element={<BookingCalendar />} />
              </Routes>
            )}
          </Formik>
        </div>
      </div>
    </LocalizationProvider>
  )
}
