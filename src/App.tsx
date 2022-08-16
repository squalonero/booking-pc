import BookingCalendar from 'pages/Booking/BookingCalendar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="w-full">
      <div className="h-full flex flex-col my-5 mx-auto items-center">
        <Routes>
          <Route path="/" element={<BookingCalendar />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
