import SimpleBarReact from 'simplebar-react'
import { alpha, styled } from '@mui/material/styles'
import type { SxProps } from '@mui/material'
import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { isMobile } from '@/shared/constant'

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}))

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  'maxHeight': '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}))

export function Scrollbar({ children, sx = {}, ...other }: { children: ReactNode; sx: SxProps; other?: SimpleBarReact['props'] }) {
  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    )
  }

  return (
    <RootStyle>
      <SimpleBarStyle sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  )
}
