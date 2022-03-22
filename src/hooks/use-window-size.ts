import { useMemo, useState } from 'react'
import { RESPONSE_DESIGN } from '@/shared/constant'

export function useWindowSize() {
  const [size, setSize] = useState<RESPONSE_DESIGN>(RESPONSE_DESIGN.sm)
  const isSm = useMemo<boolean>(() => window.innerWidth <= RESPONSE_DESIGN.sm, [])

  return {
    size,
    isSm,
  }
}
