import type { RegisterOptions } from 'react-hook-form/dist/types/validator'
import type { FieldErrors } from 'react-hook-form/dist/types/errors'

export function transformBeforeTime(time: number) {
  return Math.ceil((Date.now() - time) / 1000 / 60)
}

export function transformCalendarTime(time: Date) {
  return `${time.getFullYear()}年 ${time.getMonth() + 1}月${time.getDate()}日`
}

export function validateWithHelperText<T>(errors: FieldErrors<T>, filed: keyof T, validateFiled: keyof RegisterOptions, props: Object) {
  return (errors as any)[filed]?.type === validateFiled && props
}
