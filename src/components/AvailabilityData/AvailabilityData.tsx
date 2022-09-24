import dayjs from 'dayjs'
import React from 'react'
import Config from '../../Config.json'
import { AvailabilityDataDto } from './model'

const AvailabilityData = ({
  children,
  selectedDate,
  availByDay
}: AvailabilityDataDto) => {
  return (
    <>
      <h4 className="flex justify-between">
        <span className="text-gray-500">Data selezionata:</span>
        <span>{dayjs(selectedDate).format('DD-MM-YYYY')}</span>
      </h4>
      <div className="flex justify-between">
        <div className="text-gray-500">Posti occupati:</div>
        <div>
          {availByDay.confirmed}/{Config.max_people}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-gray-500">Persone in coda:</div>
        <div>
          {availByDay.pending}/{Config.max_people}
        </div>
      </div>
      <div className="flex justify-between text-xl">
        <div className="text-gray-500">Posti disponibili:</div>
        <div>{Config.max_people - availByDay.total}</div>
      </div>
    </>
  )
}

export default AvailabilityData
