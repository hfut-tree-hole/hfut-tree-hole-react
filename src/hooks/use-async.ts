import { useEffect, useState } from 'react'
import type { AxiosError } from 'axios'

// use async hook for wrapping try catch
export function useAsync<T, Error = AxiosError>(
  asyncFn: () => Promise<T>,
  deps: any[] = [],
) {
  const [state, setState] = useState<T | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    asyncFn()
      .then((result) => {
        if (!cancelled) {
          setState(result)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err)
          setLoading(false)
        }
      })
    return () => {
      cancelled = true
    }
  }, deps)

  return { state, loading, error }
}

export async function wrapAsync<T>(
  asyncFn: () => Promise<T>,
) {
  let state: T | undefined
  let error: AxiosError['response']
  let loading = true

  await asyncFn().then((res) => {
    state = res
    loading = false
  }).catch((err) => {
    error = err.response
    loading = false
  })

  return { state, error, loading }
}
