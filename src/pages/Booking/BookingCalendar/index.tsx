import Calendar from 'components/Calendar/Calendar'

const BookingCalendar = () => {
  return (
    <div className="mx-auto">
      <div className="text-center">
        <h1 className="text-lg font-bold text-blue-500">Nome</h1>
        <h2 className="text-sm font-bold text-blue-900">Prenotazioni</h2>
      </div>

      <Calendar />
    </div>
  )
}

export default BookingCalendar
