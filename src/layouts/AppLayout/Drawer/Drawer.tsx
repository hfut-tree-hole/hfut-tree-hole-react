import type { DrawerProps } from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import type { ReactNode } from 'react'
import { DrawerHeader } from './DrawerHeader'
import { DrawerList } from './DrawerList'
import { NAVBAR } from '@/shared/config/theme'
import { ICONS } from '@/assets/svg/icon/Icons'
import { DrawerStyle } from '@/layouts/AppLayout/Drawer/DrawerStyle'

export const drawerWidth = 300

export interface IDrawerSideConfig {
  subheader: string
  items: { title: string; path: string; icon: ReactNode; children?: IDrawerSideConfig['items'] }[]
}

const DrawerSideConfig: IDrawerSideConfig[] = [
  {
    subheader: '常用功能',
    items: [
      { title: '主页', path: 'home', icon: ICONS.dashboard },
      { title: '博客', path: 'blog', icon: ICONS.blog },
    ],
  },
  {
    subheader: 'App',
    items: [
      { title: 'Todolist', path: 'todolist', icon: ICONS.calendar },
    ],
  },
]

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
