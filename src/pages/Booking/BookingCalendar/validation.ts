// import { BookingDto, customerDto } from 'features/booking/model'
import * as Yup from 'yup'
// import { Assign, ObjectShape } from 'yup/lib/object'

const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required')
})

export const BookingSchema = Yup.object().shape({
  date: Yup.string().required('Date is required'),
  passengers: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Passenger name is required'),
      lastName: Yup.string().required('Passenger last name is required'),
      age: Yup.string().required('Passenger age is required').nullable()
    })
  ),
  user: UserSchema
})
