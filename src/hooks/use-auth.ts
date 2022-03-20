import useLocalStorage from '@/hooks/use-local-storage'
import { USER_KEY } from '@/shared/constant'
import { UserData } from '@/_mock_'

// TODO use context

export function useAuth() {
  const [user] = useLocalStorage(USER_KEY, UserData)

  return user
}
