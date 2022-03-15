import { Box, List, ListItemText } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { ListItemIconStyle, ListItemStyle, ListItemTextStyle, ListSubheaderStyle } from './style'
import type { IDrawerSideConfig } from '@/layouts/AppLayout/Drawer/Drawer'

export function DrawerList({ list }: { list: IDrawerSideConfig[] }) {
  const theme = useTheme()
  const { pathname } = useLocation()

  const isActive = useCallback((path: string) => path === pathname, [])

  return <Box style={{ padding: '5%' }}>
    {list.map(item => (
      <List key={item.subheader} >
        <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>
        {item.items.map(subItem => (
          <ListItemStyle activeRoot={isActive(subItem.path)} key={subItem.title} theme={theme}>
            <ListItemIconStyle>{subItem.icon}</ListItemIconStyle>
            <ListItemText sx={{
              color: 'inherit',
            }} className={'text-sm'}>{subItem.title}</ListItemText>
          </ListItemStyle>
        ))}
      </List>
    ))}
  </Box>
}

export function DotIcon({ active }: { active: boolean }) {
  return (
    <ListItemIconStyle>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: theme =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </ListItemIconStyle>
  )
}
