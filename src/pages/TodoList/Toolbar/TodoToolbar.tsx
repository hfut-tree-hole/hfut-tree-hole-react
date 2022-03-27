import { styled } from '@mui/material/styles'
import { Button, IconButton, Stack, ToggleButton, Tooltip, Typography } from '@mui/material'
import useResponsive from '@/hooks/use-response'
import { BaseIcon } from '@/components/base/BaseIcon/BaseIcon'
import { transformCalendarTime } from '@/shared/utils/utils'
import type { Fn } from '@/shared/types'
import type { CalendarView } from '@/pages/TodoList/use-toolbar'

const VIEW_OPTIONS = [
  { value: 'dayGridMonth', label: '每月', icon: 'ic:round-view-module' },
  { value: 'timeGridWeek', label: '每周', icon: 'ic:round-view-week' },
  { value: 'timeGridDay', label: '每日', icon: 'ic:round-view-day' },
  { value: 'listWeek', label: '议程', icon: 'ic:round-view-agenda' },
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

interface Props {
  date: Date
  view: CalendarView
  onToday: Fn
  onNextDate: Fn
  onPrevDate: Fn
  onChangeView: Fn
}

export function TodoToolbar({ date, view, onToday, onNextDate, onPrevDate, onChangeView }: Props) {
  const isDesktop = useResponsive('up', 'sm')

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
                <BaseIcon icon={viewOption.icon} width={20} height={20}/>
              </ToggleButton>
            </Tooltip>
          ))}
        </Stack>
      )}

      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton onClick={onPrevDate}>
          <BaseIcon icon="eva:arrow-ios-back-fill" width={20} height={20} />
        </IconButton>

        <Typography variant="h5">{transformCalendarTime(date)}</Typography>

        <IconButton onClick={onNextDate}>
          <BaseIcon icon="eva:arrow-ios-forward-fill" width={20} height={20} />
        </IconButton>

      </Stack>

      {isDesktop && (
        <Button size="small" color="error" variant="contained" onClick={onToday}>
          today
        </Button>
      )
      }
    </RootStyle>
  )
}
