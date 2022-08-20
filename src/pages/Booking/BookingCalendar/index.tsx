import { Button } from '@mui/material'
import { DateController } from './DateController'

import { PeopleController } from './PeopleController'

const BookingCalendar = () => {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-lg font-bold text-blue-500">Pescaturismo Celeste</h1>
        <h2 className="text-sm font-bold text-blue-900">Prenotazioni</h2>
      </div>

      <div className="mt-5">
        <DateController />
      </div>

      <div className="mt-5">
        <PeopleController />
      </div>

      <div className="flex justify-center mt-auto">
        <Button variant="contained" color="primary">
          Verifica Disponibilità
        </Button>
      </div>
    </>
  )
}

export default BookingCalendar
