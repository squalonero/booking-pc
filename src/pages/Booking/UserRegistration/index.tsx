import { FormControl, Input } from '@mui/material'
import BottomBar from 'components/BottomBar/BottomBar'
import { BookingDto } from 'features/booking/model'
import { ErrorMessage, useFormikContext } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserRegistration = () => {
  const formik = useFormikContext<BookingDto>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!formik.values.date) navigate('/')
  }, [formik, navigate])

  return (
    <div>
      <h2 className="title text-center my-5">Tieni d'occhio la tua prenotazione</h2>
      <p>
        Inserisci un'email valida e un numero di telefono affinché possiamo rimanere in
        contatto per eventuali aggiornamenti sullo stato della prenotazione.
        <br />
        <strong className="mt-4 block">
          ATTENZIONE: la prenotazione non è effettiva finché non risulta confermata da un
          admin.
        </strong>
      </p>
      <div className="mt-3">
        <FormControl sx={{ width: '100%' }}>
          <Input
            id="user.email"
            name="user.email"
            type="text"
            placeholder="email"
            onInput={formik.handleChange}
          />
          <ErrorMessage component="span" name={`user.email`} className="text-red-500" />
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <Input
            id="user.phone"
            name="user.phone"
            type="text"
            placeholder="telefono"
            onInput={formik.handleChange}
          />
          <ErrorMessage component="span" name={`user.phone`} className="text-red-500" />
        </FormControl>
        <BottomBar isSubmit={true}></BottomBar>
      </div>
    </div>
  )
}
