import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { Login } from '@/pages/Login'
import { Home } from '@/pages/Home/Home'
import { Blog } from '@/pages/Blog/Blog'
const routes: RouteObject[] = [
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
]

export function RootRoutes() {
  const router = useRoutes(routes)

  return router
}
