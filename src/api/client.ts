import axios, { AxiosRequestConfig } from 'axios'

const createHttpClient = ({ baseURL, params }: AxiosRequestConfig) =>
  axios.create({ baseURL, params })

export const apiClient = createHttpClient({
  baseURL: '//localhost:3080'
})
