import { useEffect } from 'react'
import type { Fn } from '@/shared/types'

export function useMount(effect: Fn) {
  useEffect(() => effect, [])
}
