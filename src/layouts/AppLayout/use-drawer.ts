import { useMemo, useState } from 'react'
import type { DrawerProps } from '@mui/material/Drawer'
import useResponsive from '../../hooks/use-response'

export function useDrawer() {
  const [open, setOpen] = useState(true)

  const isDesktop = useResponsive('up', 'sm')

  const variant = useMemo((): DrawerProps['variant'] => {
    if (!isDesktop) {
      setOpen(false)
      return 'temporary'
    } else {
      setOpen(true)
      return 'persistent'
    }
  }, [isDesktop])

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
