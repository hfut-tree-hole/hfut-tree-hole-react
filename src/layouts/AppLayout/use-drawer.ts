import { useMemo, useState } from 'react'
import type { DrawerProps } from '@mui/material/Drawer'
import { useWindowSize } from '@/hooks/use-window-size'

export function useDrawer() {
  const [open, setOpen] = useState(true)

  const { isSm } = useWindowSize()

  const variant = useMemo((): DrawerProps['variant'] => {
    if (isSm) {
      setOpen(false)
      return 'temporary'
    } else {
      return 'persistent'
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  return {
    open,
    variant,
    handleDrawerClose,
    handleDrawerOpen,
    handleToggle,
  }
}
