import type { NotificationsDto } from '@/shared/Dto/notifications.dto'

export const avatarUrl = 'http://p3.music.126.net/F3sugpmX0WXG0lZkqVkG2g==/109951166049791621.jpg?param=200y200'

export const NotifyListData: NotificationsDto[] = [
  {
    type: 'personal',
    title: '你有包裹已到菜鸟裹裹，请及时提取 你有包裹已到菜鸟裹裹，请及时提取 你有包裹已到菜鸟裹裹，请及时提取 你有包裹已到菜鸟裹裹，请及时提取 你有包裹已到菜鸟裹裹，请及时提取',
    isRead: false,
    avatar: 'https://minimal-assets-api.vercel.app/assets/icons/ic_notification_chat.svg',
    notifyTime: Date.now() - 10086,
  },
  {
    type: 'public',
    title: '你最近有一场考试，请注意参加',
    isRead: false,
    avatar: 'https://minimal-assets-api.vercel.app/assets/icons/ic_notification_chat.svg',
    notifyTime: Date.now() - 1000,
  },
]
