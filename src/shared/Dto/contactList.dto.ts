export type OnlineStatus = 'online' | 'leave' | 'no-bother' | 'offline'

export interface ContactListDto {
  username: string
  avatar: string
  onlineStatus: OnlineStatus
}
