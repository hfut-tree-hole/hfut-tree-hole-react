import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/react/dist/vdom'
import { useCallback, useRef, useState } from 'react'
import CalendarStyle from '@/pages/TodoList/CalendarStyle'
import { TodoToolbar } from '@/pages/TodoList/Toolbar/TodoToolbar'
import { TodoConfirm } from '@/pages/TodoList/TodoConfirm/TodoConfirm'
import { DialogAnimate } from '@/components/Animate/DialogAnimate/DialogAnimate'
import useResponsive from '@/hooks/use-response'

console.log(1)
export function TodoList() {
  const calendarRef = useRef(null)
  const [open, setOpen] = useState(false)

  const isDesktop = useResponsive('up', 'sm')
  const [date, setDate] = useState(new Date())

  const [events, setEvents] = useState([
    { title: 'event 1', date: '2022-03-22' },
    { title: 'event 2', date: '2019-04-02' },
  ])

  const toggleOpenState = () => {
    setOpen(prev => !prev)
  }

  const handleSelectRange = useCallback(() => {}, [])
  const handleDropEvent = useCallback(() => {}, [])
  const handleSelectEvent = useCallback(() => {
    toggleOpenState()
  }, [])
  const handleResizeEvent = useCallback(() => {}, [])

  const onDialogAnimateClose = useCallback(() => {
    toggleOpenState()
  }, [])

  return <>
    <CalendarStyle>
      <TodoToolbar date={undefined} view={undefined} onToday={undefined} onNextDate={undefined} onPrevDate={undefined} onChangeView={undefined} />
      <FullCalendar
        weekends
        editable
        droppable
        selectable
        events={events}
        ref={calendarRef}
        rerenderDelay={10}
        initialDate={date}
        initialView={'dayGridMonth'}
        dayMaxEventRows={3}
        eventDisplay="block"
        headerToolbar={false}
        allDayMaintainDuration
        eventResizableFromStart
        select={handleSelectRange}
        eventDrop={handleDropEvent}
        eventClick={handleSelectEvent}
        eventResize={handleResizeEvent}
        height={isDesktop ? 720 : 'auto'}
        plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
      />
    </CalendarStyle>

    <DialogAnimate open={open} onClose={onDialogAnimateClose}>
      <TodoConfirm />
    </DialogAnimate>
  </>
}
