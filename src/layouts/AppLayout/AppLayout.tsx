import Box from '@mui/material/Box'
import type { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box/Box'
import { Footer } from '@/components/Footer'
import { useDrawer } from '@/layouts/AppLayout/use-drawer'
import { AppHeader } from '@/layouts/AppLayout/Header/Header'
import { Drawer, drawerWidth } from '@/layouts/AppLayout/Drawer/Drawer'

const RouterView = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    left: `${drawerWidth}px`,
    width: `calc(100vw - ${drawerWidth})px`,
  },
  left: 0,
  top: 60,
  width: '100vw',
}))

export function AppLayout(props: { children: ReactNode }) {
  const { open, variant, handleDrawerClose, handleDrawerOpen } = useDrawer()

  return (
    <>
      <Box className={'relative w-screen h-screen'}>
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
