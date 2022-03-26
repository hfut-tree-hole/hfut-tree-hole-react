import { useState } from 'react'
import { createModel } from 'hox'
import type { EventInput } from '@fullcalendar/common'
import type FullCalendar from '@fullcalendar/react'

function useTodo() {
  const [events, setEvents] = useState<EventInput[]>([])
  const [calendarEl, setCalenderEl] = useState<FullCalendar>()

  const setRootEl = (el: FullCalendar) => {
    setCalenderEl(el)
  }

  const addEvents = (event: EventInput) => {
    setEvents(prev => prev.concat(event))
  }

  return {
    events,
    calendarEl,
    setRootEl,
    addEvents,
  }
}

const useTodoModel = createModel(useTodo)

export default useTodoModel
