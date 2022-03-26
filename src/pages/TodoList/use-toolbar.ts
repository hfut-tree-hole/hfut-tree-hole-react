import { useCallback, useEffect, useRef, useState } from 'react'
import type FullCalendar from '@fullcalendar/react'
import useTodoModel from '@/pages/TodoList/store/todo.model'

export type CalendarView = 'dayGridMonth' | 'listWeek' | 'timeGridDay' | 'timeGridWeek'

export function useToolbar(isDesktop: boolean | null) {
  const store = useTodoModel()
  const [date, setDate] = useState(new Date())

  const calendarRef = useRef<FullCalendar>(null)

  const [view, setView] = useState<CalendarView>(isDesktop ? 'dayGridMonth' : 'listWeek')
  const handleChangeView = useCallback((payload: CalendarView) => {
    setView(payload)
    calendarRef.current?.getApi().changeView(payload)
  }, [])

  useEffect(() => {
    const el = calendarRef.current?.getApi()
    if (el) {
      const newView = isDesktop ? 'dayGridMonth' : 'listWeek'
      el.changeView(newView)
      store.setRootEl(calendarRef.current!)
      setView(newView)
    }
  }, [isDesktop])

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
    view,
  }
}
