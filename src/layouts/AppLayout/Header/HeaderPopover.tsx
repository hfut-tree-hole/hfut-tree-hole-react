import type { ReactNode } from 'react'
import { useCallback, useState } from 'react'
import { IconButton } from '@mui/material'

export function HeaderPopover({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  return <>
    <IconButton onClick={handleOpen}>
      {children}
    </IconButton>
  </>
}
