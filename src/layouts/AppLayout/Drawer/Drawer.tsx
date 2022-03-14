import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useRef } from 'react'
import type { BaseListProps } from '@/components/base/BaseList'
import { BaseList } from '@/components/base/BaseList'
import { Calendar } from '@/assets/svg/icon/calendar'
import { BlogIcon } from '@/assets/svg/icon/blog'

export function DrawerList() {
  const list = useRef<BaseListProps[]>([
    {
      path: '/',
      txt: '首页',
      icon: <HomeIcon />,
    },
    {
      path: '/topic',
      txt: '话题',
      icon: <AssignmentIcon />,
    },
    {
      path: '/calendar',
      txt: '日历',
      icon: <Calendar />,
    },
    {
      path: '/blog',
      txt: '发帖',
      icon: <BlogIcon />,
    },
  ])
  return <>
    <BaseList list={list.current} />
  </>
}
