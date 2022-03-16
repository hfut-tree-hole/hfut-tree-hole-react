import useLocalStorage from '@/hooks/use-local-storage'
import { USER_KEY } from '@/shared/constant'
import { avatarUrl } from '@/_mock_'

const defaultVal = {
  avatar: avatarUrl,
}

// TODO use context

export function useAuth(): typeof defaultVal {
  const [user] = useLocalStorage(USER_KEY, defaultVal)

  return user
}
