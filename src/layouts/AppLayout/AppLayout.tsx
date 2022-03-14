import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { useDrawer } from '@/layouts/AppLayout/use-drawer'
import { DrawerHeader } from '@/layouts/AppLayout/Drawer/DrawerHeader'
import { DrawerList } from '@/layouts/AppLayout/Drawer/Drawer'
import { AppHeader } from '@/layouts/AppLayout/Header/Header'

export const drawerWidth = 300

const Drawer = styled(MuiDrawer)(({ theme }) => (
  {
    [theme.breakpoints.down('sm')]: {
      'width': '70%',
      'flexShrink': 0,
      '& .MuiDrawer-paper': {
        width: '70%',
        boxSizing: 'border-box',
      },
    },
    [theme.breakpoints.up('sm')]: {
      'width': drawerWidth,
      'flexShrink': 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    },
    color: theme.palette.primary.main,
  }
))

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
          }}
        >
          <DrawerHeader />
          <DrawerList />
        </Drawer>
        <Box
          className={'flex justify-center'}
          children={props.children}
        />
        <Footer />
      </Box>
    </>
  )
}
