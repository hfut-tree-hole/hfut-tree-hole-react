import type { ContactListDto } from '../shared/Dto/contactList.dto'
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

export const contactListData: ContactListDto[] = [
  {
    username: 'Snowingfox',
    avatar: 'https://avatars.githubusercontent.com/u/26035718?v=4',
    onlineStatus: 'online',
  },
  {
    username: 'AntFu',
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
    onlineStatus: 'no-bother',
  },
  {
    username: 'Evan You',
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
    onlineStatus: 'online',
  },
  {
    username: 'beta',
    avatar: 'https://avatars.githubusercontent.com/u/24516654?v=4',
    onlineStatus: 'leave',
  },
  {
    username: 'Hux',
    avatar: 'https://avatars.githubusercontent.com/u/5563315?v=4',
    onlineStatus: 'online',
  },
  {
    username: 'AntFu',
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
    onlineStatus: 'no-bother',
  },
  {
    username: 'Evan You',
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
    onlineStatus: 'online',
  },
  {
    username: 'beta',
    avatar: 'https://avatars.githubusercontent.com/u/24516654?v=4',
    onlineStatus: 'leave',
  },
  {
    username: 'Hux',
    avatar: 'https://avatars.githubusercontent.com/u/5563315?v=4',
    onlineStatus: 'online',
  },
  {
    username: 'AntFu',
    avatar: 'https://avatars.githubusercontent.com/u/11247099?v=4',
    onlineStatus: 'no-bother',
  },
  {
    username: 'Evan You',
    avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
    onlineStatus: 'online',
  },
  {
    username: 'beta',
    avatar: 'https://avatars.githubusercontent.com/u/24516654?v=4',
    onlineStatus: 'leave',
  },
  {
    username: 'Hux',
    avatar: 'https://avatars.githubusercontent.com/u/5563315?v=4',
    onlineStatus: 'online',
  },
]

export const UserData = {
  username: 'snowingfox',
  studentId: '2021xxxxxx',
  avatar: avatarUrl,
  email: 'MSnowingFox@outlook.com',
  grade: {
    department: '计算机与信息系',
    class: '电信科21-x班',
  },
}
