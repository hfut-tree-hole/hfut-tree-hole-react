import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from '@mui/material'
import { useCallback, useState } from 'react'
import { NotifyIcon } from '@/assets/svg/icon/NotifyIcon'
import { NotifyListData } from '@/_mock_'
import { HeaderPopover } from '@/layouts/AppLayout/Header/HeaderPopover'
import { ClearAll } from '@/assets/svg/icon/clearAll'
import { Scrollbar } from '@/components/base/Scrollbar/Scrollbar'
import { BaseIcon } from '@/components/base/BaseIcon/BaseIcon'
import type { NotificationsDto } from '@/shared/Dto/notifications.dto'
import { transformTime } from '@/shared/utils/utils'

function NotificationItem({ item }: { item: NotificationsDto }) {
  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }} src={item.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <BaseIcon icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {transformTime(item.notifyTime)} 分钟之前
          </Typography>
        }
      />
    </ListItemButton>
  )
}

function NotificationList({ totalUnread, handleMarkAllAsRead }: { totalUnread: number; handleMarkAllAsRead: () => void }) {
  return <>
    <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">通知</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          你有 {totalUnread} 条未读的消息
        </Typography>
      </Box>

      {totalUnread > 0 && (
        <Tooltip title="标记全部消息为已读">
          <IconButton color="primary" onClick={handleMarkAllAsRead}>
            <Icon>
              <ClearAll />
            </Icon>
          </IconButton>
        </Tooltip>
      )}
    </Box>

    <Divider sx={{ borderStyle: 'dashed' }} />
    <Scrollbar sx={{ maxHeight: '400px' }}>
      <List
        sx={{ maxHeight: '400px' }}
        subheader={
          <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
            最新未读通知
          </ListSubheader>
        }
      >
        {
          NotifyListData.map((item) => {
            return <NotificationItem key={item.notifyTime} item={item} />
          })
        }
        {
          NotifyListData.map((item) => {
            return <NotificationItem key={item.notifyTime} item={item} />
          })
        }
        {
          NotifyListData.map((item) => {
            return <NotificationItem key={item.notifyTime} item={item} />
          })
        }
        {
          NotifyListData.map((item) => {
            return <NotificationItem key={item.notifyTime} item={item} />
          })
        }
        {
          NotifyListData.map((item) => {
            return <NotificationItem key={item.notifyTime} item={item} />
          })
        }
      </List>
    </Scrollbar>
    <Box sx={{ p: 1 }}>
      <Button fullWidth disableRipple>
        查看所有通知
      </Button>
    </Box>
  </>
}

export function Notification() {
  const [totalUnread, setTotalUnread] = useState(NotifyListData.filter(item => !item.isRead).length)

  const handleMarkAllAsRead = useCallback(() => {
    NotifyListData.forEach(item => item.isRead = true)
    setTotalUnread(0)
  }, [])
  return <>
    <HeaderPopover menuChildren={<NotificationList totalUnread={totalUnread} handleMarkAllAsRead={handleMarkAllAsRead}/>} menuProps={{
      sx: { width: 360, p: 0, mt: 1.5, ml: 0.75 },
    }}>
      <Badge badgeContent={totalUnread} color={'error'}>
        <NotifyIcon />
      </Badge>
    </HeaderPopover>
  </>
}
