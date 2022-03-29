import type { DateSelectArg, EventClickArg } from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/react/dist/vdom'
import { useCallback, useState } from 'react'
import { Box, Button, Card, DialogTitle } from '@mui/material'
import type { EventPayload } from './store/todo.model'
import useTodoModel from './store/todo.model'
import CalendarStyle from '@/pages/TodoList/CalendarStyle'
import { TodoToolbar } from '@/pages/TodoList/Toolbar/TodoToolbar'
import { TodoForm } from '@/pages/TodoList/TodoForm/TodoForm'
import { DialogAnimate } from '@/components/Animate/DialogAnimate/DialogAnimate'
import useResponsive from '@/hooks/use-response'
import { useToolbar } from '@/pages/TodoList/use-toolbar'
import { BaseIcon } from '@/components/base/BaseIcon/BaseIcon'

export const TodoList = () => {
  const isDesktop = useResponsive('up', 'sm')

  const store = useTodoModel()

  const [open, setOpen] = useState(false)
  const [isSelectedEvent, setIsSelectedEvent] = useState(false)
  const [formPayload, setFormPayload] = useState<EventPayload>()

  const {
    date,
    handleChangeView,
    handleNextDate,
    handlePrevDate,
    handleOnToday,
    calendarRef,
    view,
  } = useToolbar(isDesktop)

  const toggleOpenState = () => {
    setOpen(prev => !prev)
  }

  const handleAddEventClick = useCallback(() => toggleOpenState(), [])

  const handleSelectRange = useCallback((payload: DateSelectArg) => {
    setFormPayload({
      start: payload.start as Date,
      end: payload.end,
    } as any)
    toggleOpenState()
  }, [])

  const handleDropEvent = useCallback(() => {}, [])

  const handleSelectEvent = useCallback((event: EventClickArg) => {
    setIsSelectedEvent(true)
    setFormPayload(event.event as any)
    toggleOpenState()
  }, [])

  const handleResizeEvent = useCallback(() => {

  }, [])

  const onDialogAnimateClose = useCallback(() => {
    toggleOpenState()
  }, [])

  return <>
    {!isDesktop && (
      <Box className={'mb-5'}>
        <Button variant="contained" startIcon={<BaseIcon icon={'carbon:add'} onClick={handleAddEventClick}/>}>
          添加任务
        </Button>
      </Box>
    )}
    <Card>
      <CalendarStyle>
        <TodoToolbar date={date} onChangeView={handleChangeView} onNextDate={handleNextDate} onPrevDate={handlePrevDate} onToday={handleOnToday} view={view}/>
        <FullCalendar
          weekends
          editable
          droppable
          selectable
          events={store.events}
          ref={calendarRef}
          rerenderDelay={10}
          initialDate={date}
          initialView={view}
          dayMaxEventRows={5}
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

    {
      open
        ? <DialogAnimate open={open} onClose={onDialogAnimateClose} sx={{
          opacity: 1,
        }}>
          <DialogTitle>{isSelectedEvent ? '编辑任务' : '新增任务'}</DialogTitle>
          <TodoForm isSelected={isSelectedEvent} payload={formPayload} handleCancel={toggleOpenState}/>
        </DialogAnimate>
        : <></>
    }
  </>
}
