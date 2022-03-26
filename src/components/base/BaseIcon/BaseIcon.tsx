import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material/Box/Box'

interface BaseIconProps extends BoxProps{
  icon: string
}

export function BaseIcon(props: BaseIconProps) {
  return <>
    <Box component={Icon} {...props} />
  </>
}
