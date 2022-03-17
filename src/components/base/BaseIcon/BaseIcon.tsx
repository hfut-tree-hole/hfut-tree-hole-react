import { Icon } from '@iconify/react'
import type { SxProps } from '@mui/material'
import { Box } from '@mui/material'

export function BaseIcon({ icon, sx }: { icon: string; sx: SxProps }) {
  return <>
    <Box component={Icon} icon={icon} sx={sx}/>
  </>
}
