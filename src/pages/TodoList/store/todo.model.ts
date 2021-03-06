import { useState } from 'react'
import { createModel } from 'hox'
import type FullCalendar from '@fullcalendar/react'
import type { EventInput } from '@fullcalendar/common'

export interface EventPayload extends EventInput {
  [key: string]: any
  start: Date | number[] | number
  end: Date | number[] | number
}

function useTodo() {
  const [events, setEvents] = useState<EventPayload[]>([])
  const [calendarEl, setCalenderEl] = useState<FullCalendar>()

  const setRootEl = (el: FullCalendar) => {
    setCalenderEl(el)
  }

  const addEvents = (event: EventPayload) => {
    event = { ...event, id: `${event.start}-${event.end}-${event.title}` }
    if (getEvent(event)) {
      changeEvent(event)
      return
    }
    setEvents(prev => prev.concat(event))
  }

  const changeEvent = (event: EventPayload) => {
    setEvents(prev => prev.map(item => item.id === event.id ? event : item))
  }

  const getEvent = (event: EventPayload) => {
    return calendarEl?.getApi().getEventById(event.id || '')
  }

  const deleteEvent = (event: EventPayload) => {
    setEvents((prev) => {
      const idx = prev.findIndex(item => item.id === event.id)

      return prev.splice(idx + 1, prev.length)
    })
  }

  return {
    events,
    calendarEl,
    setRootEl,
    addEvents,
    deleteEvent,
  }
}

const useTodoModel = createModel(useTodo)

export default useTodoModel
