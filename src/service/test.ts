import { request } from '@/service/base'

export function getRecommendMusic() {
  return request({ url: '/banner' })
}
