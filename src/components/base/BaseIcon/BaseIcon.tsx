import { Icon } from '@iconify/react'
import type { SxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material/Box/Box'

export function BaseIcon({ icon, sx, ...boxProps }: { icon: string; sx: SxProps; boxProps?: BoxProps }) {
  return <>
    <Box component={Icon} icon={icon} sx={sx} {...(boxProps || {})}/>
  </>
}
