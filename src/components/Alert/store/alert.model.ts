import { useState } from 'react'
import { createModel } from 'hox'
import type { SnackbarOrigin } from '@mui/material/Snackbar/Snackbar'

function useAlert() {
  const [open, setOpen] = useState(false)
  const [vertical, setVertical] = useState<SnackbarOrigin['vertical']>('top')
  const [horizontal, setHorizontal] = useState<SnackbarOrigin['horizontal']>('right')

  const toggleAlert = (state = !open) => setOpen(state)

  return {
    open,
    vertical,
    horizontal,
    toggleAlert,
  }
}

const useAlertModel = createModel(useAlert)

export default useAlertModel
