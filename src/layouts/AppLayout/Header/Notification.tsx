import { Badge, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { NotifyIcon } from '@/assets/svg/icon/NotifyIcon'
import { NotifyListData } from '@/_mock_'
import { HeaderPopover } from '@/layouts/AppLayout/Header/HeaderPopover'

function NotificationList() {
  return <>
    <List>
      {
        NotifyListData.map((item) => {
          return <ListItemButton key={item.title}>
            <ListItem>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          </ListItemButton>
        })
      }
    </List>
  </>
}

export function Notification() {
  return <>
    <HeaderPopover menuChildren={<NotificationList />}>
      <Badge badgeContent={2} color={'error'}>
        <NotifyIcon />
      </Badge>
    </HeaderPopover>
  </>
}
