import { Avatar, Box, Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import { HeaderList, HeaderListItem } from './styles'
import { useAuth } from '@/hooks/use-auth'
import { HeaderPopover } from '@/layouts/AppLayout/Header/HeaderPopover'

const userAvatarConfig = ['home', 'profile', 'settings', 'logout']

function UserAvatarMenu() {
  const user = useAuth()

  return <>
    <Box sx={{ my: 1.5, px: 2.5 }}>
      <Typography variant="subtitle1" noWrap>
        {user.username}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        {user.grade.class}
      </Typography>
    </Box>

    <Divider sx={{ borderStyle: 'dashed' }} />

    <HeaderList>
      {
        userAvatarConfig.map((item) => {
          return <>
            <HeaderListItem key={item}>
              <ListItemText>{item}</ListItemText>
            </HeaderListItem>
          </>
        })
      }
    </HeaderList>
  </>
}

export function UserAvatar() {
  const user = useAuth()
  return <>
    <HeaderPopover menuChildren={<UserAvatarMenu />} menuProps={{ sx: { width: 250, p: 0, mt: 1.5, ml: 0.75 } }}>
      <Avatar src={user.avatar}/>
    </HeaderPopover>
  </>
}
