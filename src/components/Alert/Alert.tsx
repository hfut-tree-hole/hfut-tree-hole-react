import { Alert, Fade, Snackbar } from '@mui/material'
import ReactDOM from 'react-dom'
import type { AlertColor } from '@mui/material/Alert/Alert'
import type { SnackbarOrigin } from '@mui/material/Snackbar/Snackbar'
import { useState } from 'react'
import useResponsive from '@/hooks/use-response'

interface TipAlertProps {
  message: string
  anchorOrigin?: SnackbarOrigin
  type?: AlertColor
  duration?: number
}

export function TipMessage({ message, duration = 3000, type = 'info', anchorOrigin }: TipAlertProps) {
  const container = document.createElement('div')
  ReactDOM.render(
    <TipAlert
      message={message}
      duration={duration}
      type={type}
      anchorOrigin={anchorOrigin}
    />,
    container,
  )
  document.getElementById('root')!.append(container)
}

function TipAlert(props: TipAlertProps) {
  const [open, setOpen] = useState(true)
  const isDesktop = useResponsive('up', 'sm')
  const anchorOrigin: SnackbarOrigin = isDesktop ? { vertical: 'top', horizontal: 'right' } : { vertical: 'top', horizontal: 'center' }

  return <>
    <Snackbar open={open} onClose={() => setOpen(false)} anchorOrigin={props.anchorOrigin || anchorOrigin} autoHideDuration={props.duration} TransitionComponent={Fade}>
      <Alert severity={props.type}>{props.message}</Alert>
    </Snackbar>
  </>
}
