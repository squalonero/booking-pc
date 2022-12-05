import { BookingDto } from 'features/booking/model'
import { useFormikContext } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ThankyouPage = () => {
  const formik = useFormikContext<BookingDto>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!formik.values.date) navigate('/')
  }, [formik, navigate])

  return <div>ThankyouPage</div>
}

export default ThankyouPage
