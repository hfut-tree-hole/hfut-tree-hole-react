import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box/Box'
import { Outlet } from 'react-router-dom'
import { AppLayoutConfig } from '@/shared/config/layout'
import { Footer } from '@/components/Footer'
import { useDrawer } from '@/layouts/AppLayout/use-drawer'
import { AppHeader } from '@/layouts/AppLayout/Header/Header'
import { Drawer } from '@/layouts/AppLayout/Drawer/Drawer'

const RouterView = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: '100vw',
  position: 'relative',
  paddingLeft: 24,
  paddingRight: 24,
  marginLeft: 0,
  paddingTop: AppLayoutConfig.HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
  paddingBottom: AppLayoutConfig.HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
  [theme.breakpoints.up('sm')]: {
    marginLeft: `${AppLayoutConfig.DRAWER.DASHBOARD_WIDTH + 20}px`,
    maxWidth: `calc(100vw - ${AppLayoutConfig.DRAWER.DASHBOARD_WIDTH})px`,
    paddingTop: AppLayoutConfig.HEADER.MOBILE_HEIGHT + 24,
    paddingBottom: AppLayoutConfig.HEADER.MOBILE_HEIGHT + 24,
  },
  overflow: 'hidden',
}))

export function AppLayout() {
  const { open, variant, handleDrawerClose, handleDrawerOpen } = useDrawer()

  return (
    <>
      <Box className={'relative w-full h-screen overflow-hideen'}>
        <AppHeader open={open} handleDrawerOpen={handleDrawerOpen} />
        <Drawer
          variant={variant}
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: {
              bgcolor: 'background.default',
            },
          }} />
        <RouterView>
          <Outlet />
        </RouterView>
        <Footer />
      </Box>
    </>
  )
}
