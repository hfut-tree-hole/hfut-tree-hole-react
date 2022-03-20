import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import type { AppBarProps, SxProps } from '@mui/material'
import type { ReactNode } from 'react'
import { List } from '@mui/material'
import { drawerWidth } from '@/layouts/AppLayout/Drawer/Drawer'
import { ListItemStyle } from '@/layouts/AppLayout/Drawer/style'

export const Header = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps & { open: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export function HeaderListItem({ children }: { children: ReactNode }) {
  const theme = useTheme()
  return <>
    <ListItemStyle className={'select-none'} activeRoot={false} theme={theme} sx={{ padding: '5px 15px', boxSizing: 'content-box' }}>
      {children}
    </ListItemStyle>
  </>
}

export function HeaderList({ children, sx = { maxHeight: 300, p: 1, mt: 1 } }: { children: ReactNode; sx?: SxProps }) {
  return <List sx={sx} children={children}/>
}
