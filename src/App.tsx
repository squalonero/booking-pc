import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import it from 'dayjs/locale/it'

import BookingCalendar from 'pages/Booking/BookingCalendar'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <LocalizationProvider adapterLocale={it} dateAdapter={AdapterDayjs}>
      <div className="w-[calc(100%_-_6rem)] h-screen mx-[3rem]">
        <div className="flex flex-col py-5 items-center h-full w-full mx-auto">
          <Routes>
            <Route path="/" element={<BookingCalendar />} />
          </Routes>
        </div>
      </div>
    </LocalizationProvider>
  )
}
