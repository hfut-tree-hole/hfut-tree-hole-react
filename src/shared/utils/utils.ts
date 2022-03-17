export function transformTime(time: number) {
  return Math.ceil((Date.now() - time) / 1000 / 60)
}
