import type { PopoverProps } from '@mui/material'
import { Popover } from '@mui/material'
import type { ReactNode } from 'react'

export default function MenuPopover({ children, other }: { children: ReactNode; other: PopoverProps }) {
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          p: 1,
          width: 200,
          overflow: 'inherit',
          ...(other.sx || {}),
        },
      }}
      {...other}
    >
      {children}
    </Popover>
  )
}
