import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
import { Home } from '@/pages/Home/Home'
import { Blog } from '@/pages/Blog/Blog'
import { TodoList } from '@/pages/TodoList/TodoList'
import { Test } from '@/pages/Test/Test'
import { Auth } from '@/pages/Auth/Auth'
import { TipLayout } from '@/layouts/TipLayout/TipLayout'
import { NotFound } from '@/layouts/TipLayout/NotFound/NotFound'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'

const routes: RouteObject[] = [
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={'home'} />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'todolist',
        element: <TodoList />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to={'/app'} />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '*',
    element: <TipLayout />,
    children: [
      {
        path: '404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <Navigate to={'404'} />,
      },
    ],
  },
]

export function RootRoutes() {
  const router = useRoutes(routes)

  return router
}
