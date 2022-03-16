import { Avatar, IconButton } from '@mui/material'
import { useAuth } from '@/hooks/use-auth'

export function UserAvatar() {
  const user = useAuth()
  return <>
    <IconButton>
      <Avatar src={user.avatar}/>
    </IconButton>
  </>
}
