import { Avatar, List, ListItemButton, ListItemText } from '@mui/material'
import { useAuth } from '@/hooks/use-auth'
import { HeaderPopover } from '@/layouts/AppLayout/Header/HeaderPopover'

const userAvatarConfig = ['home', 'profile', 'settings', 'logout']

function UserAvatarMenu() {
  return <List>
    {
      userAvatarConfig.map((item) => {
        return <>
          <ListItemButton key={item}>
            <ListItemText>{item}</ListItemText>
          </ListItemButton>
        </>
      })
    }
  </List>
}

export function UserAvatar() {
  const user = useAuth()
  return <>
    <HeaderPopover menuChildren={<UserAvatarMenu />}>
      <Avatar src={user.avatar}/>
    </HeaderPopover>
  </>
}
