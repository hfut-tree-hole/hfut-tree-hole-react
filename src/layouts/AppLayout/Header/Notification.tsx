import { Badge } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { NotifyIcon } from '@/assets/svg/icon/NotifyIcon'

export function Notification() {
  return <>
    <IconButton>
      <Badge badgeContent={2} color={'error'}>
        <NotifyIcon />
      </Badge>
    </IconButton>
  </>
}
