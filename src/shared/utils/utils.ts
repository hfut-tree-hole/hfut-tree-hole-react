import type { FieldError } from 'react-hook-form/dist/types/errors'

export function transformBeforeTime(time: number) {
  return Math.ceil((Date.now() - time) / 1000 / 60)
}

export function transformCalendarTime(time: Date) {
  return `${time.getFullYear()}年 ${time.getMonth() + 1}月${time.getDate()}日`
}

export function validateWithHelperText(errorMsg?: FieldError, msg?: string) {
  return errorMsg ? { error: true, helperText: errorMsg.message || msg } : { error: false, helperText: '' }
}

export function resolvePath(path: string, idx?: number) {
  if (!path.includes('/')) {
    return path
  }
  const resolved = path.split('/')
  const ret = resolved.at(-1)
  if (!idx) {
    return ret
  } else {
    return resolved[idx]
  }
}
