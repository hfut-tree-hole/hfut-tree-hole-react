import { Avatar, Box, List, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Scrollbar } from '../../../components/base/Scrollbar/Scrollbar'
import { contactListData } from '../../../_mock_'
import { ListItemStyle } from '../Drawer/style'
import { FriendIcon } from '@/assets/svg/icon/friend'
import { HeaderPopover } from '@/layouts/AppLayout/Header/HeaderPopover'

function FriendList() {
  const theme = useTheme()

  return <>
    <Box className={'flex-col'} sx={{ display: 'flex' }}>

      <Typography variant="h6" sx={{ p: 1.5 }}>
        好友列表 <Typography component="span">({contactListData.length})</Typography>
      </Typography>
      <Scrollbar sx={{ maxHeight: 300 }}>
        <List>
          {
            contactListData.map((item) => {
              return <>
                <ListItemStyle activeRoot={false} theme={theme} sx={{ padding: '5px 15px', boxSizing: 'content-box' }}>
                  <ListItemAvatar>
                    <Avatar src={item.avatar}/>
                  </ListItemAvatar>
                  <ListItemText>
                    {item.username}
                  </ListItemText>
                </ListItemStyle>
              </>
            })
          }
        </List>
      </Scrollbar>
    </Box>
  </>
}

export function Friend() {
  return <>
    <HeaderPopover menuChildren={<FriendList />} menuProps={{
      sx: {
        width: 360,
        p: 1,
        mt: 1.5,
        ml: 0.75,
      },
    }}>
      <FriendIcon />
    </HeaderPopover>
  </>
}
