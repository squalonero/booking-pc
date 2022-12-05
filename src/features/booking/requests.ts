import axios, { AxiosResponse } from 'axios'
import { BookingDB, BookingDto } from './model'

export function storeBookingApiRequest(
  bookingDto: BookingDto
): Promise<AxiosResponse<BookingDB, BookingDto>> {
  return axios.request({
    method: 'POST',
    url: '//localhost:3080/booking',
    data: bookingDto
  })
}
