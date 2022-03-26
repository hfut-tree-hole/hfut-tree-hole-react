import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
import { Login } from '@/pages/Login'
import { Home } from '@/pages/Home/Home'
import { Blog } from '@/pages/Blog/Blog'
import { TodoList } from '@/pages/TodoList/TodoList'
import { Test } from '@/pages/Test/Test'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/todolist',
    element: <TodoList />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]

export function RootRoutes() {
  const router = useRoutes(routes)

  return router
}
