import { BookingDto, customerDto } from 'features/booking/model'
import * as Yup from 'yup'
import { Assign, ObjectShape } from 'yup/lib/object'

export const BookingSchema = Yup.object().shape({
  date: Yup.string().required('Date is required'),
  passengers: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Passenger name is required'),
      lastName: Yup.string().required('Passenger last name is required'),
      age: Yup.number().required('Passenger age is required')
    })
  )
})

export const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.number().required('Phone is required')
})
