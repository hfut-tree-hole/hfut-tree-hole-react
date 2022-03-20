import type { MouseEvent, ReactNode } from 'react'
import { useCallback, useState } from 'react'
import type { PopoverProps } from '@mui/material'
import { Box, IconButton } from '@mui/material'
import { alpha } from '@mui/material/styles'
import MenuPopover from '@/components/base/Popover/MenuPopover'

export function HeaderPopover({ children, menuChildren = <></>, menuProps }: { children: ReactNode; menuChildren?: ReactNode; menuProps?: Omit<PopoverProps, 'open'> }) {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleOpen = useCallback((e: MouseEvent<HTMLElement>) => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }, [])
  return <>
    <Box>
      <IconButton onClick={handleOpen} sx={{
        width: 40,
        height: 40,
        ...(open && {
          bgcolor: theme => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          color: theme => theme.palette.primary.main,
        }),
      }}>
        {children}
      </IconButton>

      <MenuPopover other={{
        open,
        anchorEl,
        onClose: handleClose,
        sx: { width: 360, mt: 1.5, ml: 0.75, p: 5 },
        ...(menuProps || {}),
      }} children={menuChildren}/>

    </Box>
  </>
}
