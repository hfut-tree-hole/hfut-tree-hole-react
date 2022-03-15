import Box from '@mui/material/Box'
import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { useDrawer } from '@/layouts/AppLayout/use-drawer'
import { AppHeader } from '@/layouts/AppLayout/Header/Header'
import { Drawer } from '@/layouts/AppLayout/Drawer/Drawer'

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
        <Box
          className={'relative top-16'}
          children={props.children}
        />
        <Footer />
      </Box>
    </>
  )
}
