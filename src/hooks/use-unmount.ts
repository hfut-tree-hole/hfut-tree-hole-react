import { useEffect } from 'react'
import type { Fn } from '@/shared/types'

export function useUnmount(uninstallEffect: Fn) {
  useEffect(() => {
    return uninstallEffect
  }, [])
}
