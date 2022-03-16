import type { DrawerProps } from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import type { ReactNode } from 'react'
import { DrawerHeader } from './DrawerHeader'
import { DrawerList } from './DrawerList'
import { NAVBAR } from '@/shared/config/theme'
import { ICONS } from '@/assets/svg/icon/Icons'

export const drawerWidth = 300

export interface IDrawerSideConfig {
  subheader: string
  items: { title: string; path: string; icon: ReactNode; children?: IDrawerSideConfig['items'] }[]
}

const DrawerSideConfig: IDrawerSideConfig[] = [{
  subheader: '主页',
  items: [
    { title: 'home', path: '/home', icon: ICONS.dashboard },
    { title: 'blog', path: '/blog', icon: ICONS.blog },
  ],
}]

const DrawerStyle = styled(MuiDrawer)(({ theme }) => (
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

export function Drawer({ variant, open, onClose, ...props }: DrawerProps) {
  return <>
    <DrawerStyle
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: NAVBAR.DASHBOARD_WIDTH,
          borderRightStyle: 'dashed',
          bgcolor: 'background.default',
          transition: theme =>
            theme.transitions.create('width', {
              duration: theme.transitions.duration.standard,
            }),
        },
      }}
      {...props}
    >
      <DrawerHeader />
      <DrawerList list={DrawerSideConfig}/>
    </DrawerStyle>
  </>
}
