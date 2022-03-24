import { styled } from '@mui/material/styles'
import { Button, IconButton, Stack, ToggleButton, Tooltip, Typography } from '@mui/material'

import type { RefObject } from 'react'
import { useCallback, useState } from 'react'
import type FullCalendar from '@fullcalendar/react'
import useResponsive from '@/hooks/use-response'

import { BaseIcon } from '@/components/base/BaseIcon/BaseIcon'
import { transformCalendarTime } from '@/shared/utils/utils'

const VIEW_OPTIONS = [
  { value: 'dayGridMonth', label: 'Month', icon: 'ic:round-view-module' },
  { value: 'timeGridWeek', label: 'Week', icon: 'ic:round-view-week' },
  { value: 'timeGridDay', label: 'Day', icon: 'ic:round-view-day' },
  { value: 'listWeek', label: 'Agenda', icon: 'ic:round-view-agenda' },
]

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2.5),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}))

export function TodoToolbar({ calendarEl, date }: { calendarEl: RefObject<FullCalendar>; date: Date }) {
  const isDesktop = useResponsive('up', 'sm')

  const [view, setView] = useState()

  const onChangeView = useCallback(() => {}, [])

  const onNextDate = useCallback(() => {
    console.log(calendarEl.current?.getApi().next())
  }, [])

  const onPrevDate = useCallback(() => {}, [])

  const onToday = useCallback(() => {}, [])

  return (
    <RootStyle>
      {isDesktop && (
        <Stack direction="row" spacing={0.5}>
          {VIEW_OPTIONS.map(viewOption => (
            <Tooltip key={viewOption.value} title={viewOption.label}>
              <ToggleButton
                value={view}
                selected={viewOption.value === view}
                onChange={() => onChangeView(viewOption.value)}
                sx={{ width: 32, height: 32, padding: 0, border: 0 }}
              >
                <BaseIcon icon={viewOption.icon} width={20} height={20} />
              </ToggleButton>
            </Tooltip>
          ))}
        </Stack>
      )}

      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton onClick={onPrevDate}>
          <BaseIcon icon="eva:arrow-ios-back-fill" sx={{
            width: 20,
            height: 20,
          }} />
        </IconButton>

        <Typography variant="h5">{transformCalendarTime(date)}</Typography>

        <IconButton onClick={onNextDate}>
          <BaseIcon icon="eva:arrow-ios-forward-fill" sx={{
            width: 20,
            height: 20,
          }} />
        </IconButton>
      </Stack>

      {isDesktop && (
        <Button size="small" color="error" variant="contained" onClick={onToday}>
          今天
        </Button>
      )}
    </RootStyle>
  )
}
