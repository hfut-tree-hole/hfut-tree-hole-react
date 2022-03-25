import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import useResponsive from '../../../hooks/use-response'
import { Header } from './styles'
import { Searchbar } from '@/components/Searchbar'
import type { Fn } from '@/shared/types'
import { MenuIcon } from '@/assets/svg/icon/menu'
import { Notification } from '@/layouts/AppLayout/Header/Notification'
import { Friend } from '@/layouts/AppLayout/Header/Friend'
import { UserAvatar } from '@/layouts/AppLayout/Header/Avatar'

export function AppHeader(props: { open: boolean; handleDrawerOpen: Fn }) {
  const isDesktop = useResponsive('up', 'sm')

  return <>
    <Header position="fixed" open={props.open} className={'p-1 sm:p-0'} style={{ boxShadow: 'none', backgroundColor: 'rgba(255,255,255,.3)' }}>
      <Toolbar>
        {!isDesktop
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
