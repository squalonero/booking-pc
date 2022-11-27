import { Button, Container } from '@mui/material'
import { BookingDto } from 'features/booking/model'
import { useFormikContext } from 'formik'
import React from 'react'

type Props = {
  resetLabel?: string
  submitLabel?: string
}

const BottomBar = ({ resetLabel, submitLabel }: Props) => {
  const formik = useFormikContext<BookingDto>()
  return (
    <div className="shadow-top fixed bottom-0 left-0 right-0 z-30">
      <Container
        maxWidth="xs"
        sx={{ display: 'flex' }}
        className="justify-between bg-white py-5 px-10"
      >
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => formik.setFieldValue('date', '')}
          >
            {resetLabel || 'Cambia data'}
          </Button>
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            {submitLabel || 'Prenota'}
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default BottomBar
