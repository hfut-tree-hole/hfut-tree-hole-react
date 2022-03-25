import { useCallback, useRef, useState } from 'react'
import type FullCalendar from '@fullcalendar/react'

export function useToolbar() {
  const [date, setDate] = useState(new Date())

  const calendarRef = useRef<FullCalendar>(null)

  const handleChangeView = useCallback(() => {

  }, [])

  const handleNextDate = useCallback(() => {
    const el = calendarRef.current?.getApi()
    if (el) {
      el.next()
      setDate(el.getDate())
    }
  }, [])
  const handlePrevDate = useCallback(() => {
    const el = calendarRef.current?.getApi()
    if (el) {
      el.prev()
      setDate(el.getDate())
    }
  }, [])
  const handleOnToday = useCallback(() => {
    const el = calendarRef.current?.getApi()
    if (el) {
      el.today()
      setDate(el.getDate())
    }
  }, [])

  return {
    date,
    handleChangeView,
    handleNextDate,
    handlePrevDate,
    handleOnToday,
    calendarRef,
  }
}
