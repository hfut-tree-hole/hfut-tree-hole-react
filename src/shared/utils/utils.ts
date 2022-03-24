export function transformBeforeTime(time: number) {
  return Math.ceil((Date.now() - time) / 1000 / 60)
}

export function transformCalendarTime(time: Date) {
  return `${time.getFullYear()}年 ${time.getMonth()}月${time.getDate()}日`
}
