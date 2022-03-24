import Box from '@mui/material/Box'
import type { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box/Box'
import { AppLayoutConfig } from '../../shared/config/layout'
import { Footer } from '@/components/Footer'
import { useDrawer } from '@/layouts/AppLayout/use-drawer'
import { AppHeader } from '@/layouts/AppLayout/Header/Header'
import { Drawer, drawerWidth } from '@/layouts/AppLayout/Drawer/Drawer'

const RouterView = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: '100vw',
  position: 'relative',
  paddingLeft: 16,
  paddingRight: 16,
  marginLeft: AppLayoutConfig.DRAWER.DASHBOARD_COLLAPSE_WIDTH,
  paddingTop: AppLayoutConfig.HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
  paddingBottom: AppLayoutConfig.HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
  [theme.breakpoints.up('sm')]: {
    marginLeft: `${drawerWidth}px`,
    maxWidth: `calc(100vw - ${drawerWidth})px`,
    paddingTop: AppLayoutConfig.HEADER.MOBILE_HEIGHT + 24,
    paddingBottom: AppLayoutConfig.HEADER.MOBILE_HEIGHT + 24,
  },
  overflow: 'hidden',
}))

export function AppLayout(props: { children: ReactNode }) {
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
        <RouterView
          children={props.children}
        />
        <Footer />
      </Box>
    </>
  )
}
