import axios, { AxiosResponse } from 'axios'

/**
 * Just create the request functions and call them from the handlers
 */

export function requestGetBookingAvailByDay(date: string): Promise<AxiosResponse> {
  return axios.request({
    method: 'GET',
    url: '//localhost:3080/booking/getDayAvailability?date=' + date
  })
}

export function requestGetBookingAvailByMonth(monthDate: string): Promise<AxiosResponse> {
  return axios.request({
    method: 'GET',
    url: '//localhost:3080/booking/getMonthAvailability?date=' + monthDate
  })
}
