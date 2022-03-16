import { List, ListItemButton, ListItemText } from '@mui/material'
import { FriendIcon } from '@/assets/svg/icon/friend'
import { HeaderPopover } from '@/layouts/AppLayout/Header/HeaderPopover'

function FriendList() {
  return <>
    <List>
      {[1, 2, 3].map((item) => {
        return <>
          <ListItemButton key={item}>
            <ListItemText>{item}</ListItemText>
          </ListItemButton>
        </>
      })}
    </List>
  </>
}

export function Friend() {
  return <>
    <HeaderPopover menuChildren={<FriendList />}>
      <FriendIcon />
    </HeaderPopover>
  </>
}
