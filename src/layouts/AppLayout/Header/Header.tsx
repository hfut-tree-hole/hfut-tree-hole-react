import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import type { AppBarProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import { Searchbar } from '@/components/Searchbar'
import { useWindowSize } from '@/hooks/use-window-size'
import type { Fn } from '@/shared/types'
import { drawerWidth } from '@/layouts/AppLayout/Drawer/Drawer'
import { MenuIcon } from '@/assets/svg/icon/menu'
import { Notification } from '@/layouts/AppLayout/Header/Notification'
import { Friend } from '@/layouts/AppLayout/Header/Friend'
import { UserAvatar } from '@/layouts/AppLayout/Header/Avatar'

const Header = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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

export function AppHeader(props: { open: boolean; handleDrawerOpen: Fn }) {
  const { isSm } = useWindowSize()

  return <>
    <Header position="fixed" open={props.open} className={'p-1 sm:p-0'} style={{ boxShadow: 'none', backgroundColor: 'rgba(255,255,255,.3)' }}>
      <Toolbar>
        {isSm
          ? <IconButton
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          : ''}
        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }} sx={{ 'color': 'red', '& button': { fontSize: '20px' } }}>
          <Notification />
          <Friend />
          <UserAvatar />
        </Stack>
      </Toolbar>
    </Header>
  </>
}
