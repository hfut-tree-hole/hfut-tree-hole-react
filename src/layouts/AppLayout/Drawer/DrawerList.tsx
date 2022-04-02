import { Box, List, ListItemText } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { ListItemIconStyle, ListItemStyle, ListSubheaderStyle } from './style'
import type { IDrawerSideConfig } from '@/layouts/AppLayout/Drawer/Drawer'
import { resolvePath } from '@/shared/utils/utils'

export function DrawerList({ list }: { list: IDrawerSideConfig[] }) {
  const theme = useTheme()
  const { pathname } = useLocation()
  const resolvedPathname = resolvePath(pathname)

  const isActive = (path: string) => path === resolvedPathname

  return <Box style={{ padding: '5%' }}>
    {list.map(item => (
      <List key={item.subheader} >
        <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>
        {item.items.map(subItem => (
          <Link to={subItem.path} key={subItem.title}>
            <ListItemStyle activeRoot={isActive(subItem.path)} theme={theme}>
              <ListItemIconStyle>{subItem.icon}</ListItemIconStyle>
              <ListItemText sx={{
                'color': 'inherit',
                '& span': {
                  fontSize: '0.875rem',
                },
              }} className={'text-sm'}>{subItem.title}</ListItemText>
            </ListItemStyle>
          </Link>
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
