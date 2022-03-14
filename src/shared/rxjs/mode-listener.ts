import { Subject } from 'rxjs'
import storage from 'good-storage'
import type { ThemeMode } from '@/theme/theme-config/palette'
import { MODE_KEY } from '@/shared/constant'

const modeSubject = new Subject<ThemeMode>()

export function changeMode(mode: ThemeMode) {
  modeSubject.next(mode)
  setMode(mode)
}

export function onModeChange(fn: (mode: ThemeMode) => void) {
  modeSubject.subscribe({
    next: mode => fn(mode),
  })
}

export function getMode() {
  return storage.get(MODE_KEY, 'light')
}

function setMode(mode: ThemeMode) {
  return storage.set(MODE_KEY, mode)
}
