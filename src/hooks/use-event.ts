import { useEffect } from 'react'

export type GeneralEventListener<E = Event> = (evt: E) => void

interface InferEventTarget<Events> {
  addEventListener(event: Events, fn?: any, options?: any): any
  removeEventListener(event: Events, fn?: any, options?: any): any
}

export function useEvent(
  target: InferEventTarget<string> = window,
  name: string,
  listener: GeneralEventListener,
  options: AddEventListenerOptions = {},
) {
  if (!listener) {
    return
  }

  if (!target) {
    return
  }

  useEffect(() => {
    target.addEventListener(name, listener, options)

    return () => {
      target.removeEventListener(name, listener, options)
    }
  }, [])
}
