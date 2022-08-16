import dayjs from 'dayjs'
import locale from 'dayjs/locale/it'
import isTodayPlugin from 'dayjs/plugin/isToday'
import objectPlugin from 'dayjs/plugin/toObject'
import weekdayPlugin from 'dayjs/plugin/weekday'
import { useState, useEffect } from 'react'

const Calendar = () => {
  dayjs.extend(weekdayPlugin)
  dayjs.extend(objectPlugin)
  dayjs.extend(isTodayPlugin)

  const now = dayjs().locale({
    ...locale
  })

  const [currentMonth, setCurrentMonth] = useState(now)
  const [arrayOfDays, setArrayOfDays] = useState([])

  useEffect(() => {
    getAllDays()
  }, [currentMonth])

  const nextMonth = () => {
    const plus = currentMonth.add(1, 'month')
    setCurrentMonth(plus)
  }
  const prevMonth = () => {
    const minus = currentMonth.subtract(1, 'month')
    setCurrentMonth(minus)
  }

  const renderHeader = () => {
    const dateFormat = 'MMM YYYY'
    return (
      <div className="flex justify-between">
        <div className="">
          <div className="flex" onClick={() => prevMonth()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <span>{currentMonth.format(dateFormat)}</span>
        </div>
        <div className="flex" onClick={() => nextMonth()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    const dateFormat = 'dd'
    const days = []
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="mx-auto" key={i}>
          {now.weekday(i).format(dateFormat)}
        </div>
      )
    }
    return <div className="grid grid-cols-7 gap-3">{days}</div>
  }

  const formateDateObject = (date) => {
    const clonedObject = { ...date.toObject() }
    const formatedObject = {
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentMonth: clonedObject.months === currentMonth.month(),
      isCurrentDay: date.isToday()
    }

    return formatedObject
  }

  const getAllDays = () => {
    let currentDate = currentMonth.startOf('month').weekday(0)
    const nextMonth = currentMonth.add(1, 'month').month()
    let allDates = []
    let weekDates = []
    let weekCounter = 1
    while (currentDate.weekday(0).toObject().months !== nextMonth) {
      const formated = formateDateObject(currentDate)
      weekDates.push(formated)
      if (weekCounter === 7) {
        allDates.push({ dates: weekDates })
        weekDates = []
        weekCounter = 0
      }
      weekCounter++
      currentDate = currentDate.add(1, 'day')
    }
    setArrayOfDays(allDates)
  }

  const renderCells = () => {
    const rows = []
    let days = []
    arrayOfDays.forEach((week, index) => {
      week.dates.forEach((d, i) => {
        days.push(
          <div
            className={` ${
              !d.isCurrentMonth ? 'disabled' : d.isCurrentDay ? 'selected' : ''
            }`}
            key={i}
          >
            <span className="">{d.day}</span>
            <span className="">{d.day}</span>
          </div>
        )
      })
      rows.push(
        <div className="" key={index}>
          {days}
        </div>
      )
      days = []
    })
    return <div className="grid grid-cols-7">{rows}</div>
  }

  return (
    <div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default Calendar
