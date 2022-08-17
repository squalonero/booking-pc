import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import BookingCalendar from 'pages/Booking/BookingCalendar'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <LocalizationProvider adapterLocale={it} dateAdapter={AdapterDayjs}>
      <div className="w-full">
        <div className="h-full flex flex-col my-5 mx-auto items-center">
          <Routes>
            <Route path="/" element={<BookingCalendar />} />
          </Routes>
        </div>
      </div>
    </LocalizationProvider>
  )
}
