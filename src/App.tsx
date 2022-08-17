import { TextField } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import it from 'dayjs/locale/it'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedDate } from 'features/booking/selectors'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const App = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(selectSelectedDate)

  const handleChange = useCallback(
    (value: Date | null) => {
      console.log('clicked', value)
      if (!value) dispatch(bookingActions.resetSelectedDate())
      else dispatch(bookingActions.setSelectedDate(value.toISOString()))
    },
    [dispatch]
  )

  const tomorrow = dayjs().add(0, 'day').toDate()

  return (
    <LocalizationProvider adapterLocale={it} dateAdapter={AdapterDayjs}>
      <div className="App">
        <div className="container">
          <StaticDatePicker<Date>
            orientation="portrait"
            openTo="day"
            value={selectedDate}
            onChange={handleChange}
            shouldDisableDate={(date) => date < tomorrow}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </div>
    </LocalizationProvider>
  )
}
