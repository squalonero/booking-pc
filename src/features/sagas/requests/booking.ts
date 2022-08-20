import axios from 'axios'

/**
 * Just create the request functions and call them from the handlers
 */

export function requestGetBookingAvailability(date: string) {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:8080/bookings?date=' + date
  })
}
