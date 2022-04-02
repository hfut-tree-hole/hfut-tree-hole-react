import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import { drawerWidth } from '@/layouts/AppLayout/Drawer/Drawer'

export const DrawerStyle = styled(MuiDrawer)(({ theme }) => (
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
