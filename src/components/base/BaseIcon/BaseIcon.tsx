import { Icon } from '@iconify/react'
import type { SxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material/Box/Box'

interface BaseIconProps extends BoxProps {
  icon: string
  sx: SxProps
}

export function BaseIcon(props: BaseIconProps) {
  return <>
    <Box component={Icon} {...props} />
  </>
}
