import { FormControl, Input } from '@mui/material'
import BottomBar from 'components/BottomBar/BottomBar'
import { BookingDto } from 'features/booking/model'
import { ErrorMessage, FormikProps, useFormikContext } from 'formik'
import React from 'react'

export const UserRegistration = () => {
  const formik = useFormikContext<BookingDto>()
  console.log(formik.values)
  return (
    <div>
      <h2 className="title text-center my-5">Tieni d'occhio la tua prenotazione</h2>
      <p>
        Inserisci un'email valida affinché possiamo rimanere in contatto per eventuali
        aggiornamenti sullo stato della prenotazione.
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
        <BottomBar></BottomBar>
      </div>
    </div>
  )
}
