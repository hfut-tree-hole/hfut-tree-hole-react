import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
import { Home } from '@/pages/Home/Home'
import { Blog } from '@/pages/Blog/Blog'
import { TodoList } from '@/pages/TodoList/TodoList'
import { Test } from '@/pages/Test/Test'
import { Auth } from '@/pages/Auth/Auth'
import { Login } from '@/pages/Auth/Login'
import { Register } from '@/pages/Auth/Register'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'} />,
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
  {
    path: '/auth',
    element: <Auth />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]

export function RootRoutes() {
  const router = useRoutes(routes)

  return router
}
