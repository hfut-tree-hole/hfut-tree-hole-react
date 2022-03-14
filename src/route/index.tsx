import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { Login } from '@/pages/Login'
const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
]

export function RootRoutes() {
  const router = useRoutes(routes)

  return router
}
