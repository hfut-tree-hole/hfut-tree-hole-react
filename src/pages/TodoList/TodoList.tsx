import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/react/dist/vdom'
import { useCallback, useEffect, useState } from 'react'
import { Card } from '@mui/material'
import { observer } from 'mobx-react'
import CalendarStyle from '@/pages/TodoList/CalendarStyle'
import { TodoToolbar } from '@/pages/TodoList/Toolbar/TodoToolbar'
import { TodoForm } from '@/pages/TodoList/TodoForm/TodoForm'
import { DialogAnimate } from '@/components/Animate/DialogAnimate/DialogAnimate'
import useResponsive from '@/hooks/use-response'
import { useToolbar } from '@/pages/TodoList/use-toolbar'

export type CalendarView = 'dayGridMonth' | 'listWeek'

export const TodoList = () => {
  const isDesktop = useResponsive('up', 'sm')

  const [view, setView] = useState<CalendarView>(isDesktop ? 'dayGridMonth' : 'listWeek')

  const events = []

  const [open, setOpen] = useState(false)

  const {
    date,
    handleChangeView,
    handleNextDate,
    handlePrevDate,
    handleOnToday,
    calendarRef,
  } = useToolbar()

  useEffect(() => {
    const el = calendarRef.current?.getApi()
    if (el) {
      const newView = isDesktop ? 'dayGridMonth' : 'listWeek'
      el.changeView(newView)
      setView(newView)
    }
  }, [isDesktop])

  const toggleOpenState = () => {
    setOpen(prev => !prev)
  }

  const handleSelectRange = useCallback(() => {}, [])
  const handleDropEvent = useCallback(() => {}, [])
  const handleSelectEvent = useCallback(() => {
    toggleOpenState()
  }, [])
  const handleResizeEvent = useCallback(() => {

  }, [])

  const onDialogAnimateClose = useCallback(() => {
    toggleOpenState()
  }, [])

  return <>
    <Card>
      <CalendarStyle>
        <TodoToolbar date={date} onChangeView={handleChangeView} onNextDate={handleNextDate} onPrevDate={handlePrevDate} onToday={handleOnToday} view={view}/>
        <FullCalendar
          weekends
          editable
          droppable
          selectable
          events={events}
          ref={calendarRef}
          rerenderDelay={10}
          initialDate={date}
          initialView={view}
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
    </Card>

    <DialogAnimate open={open} onClose={onDialogAnimateClose}>
      <TodoForm />
    </DialogAnimate>
  </>
}
