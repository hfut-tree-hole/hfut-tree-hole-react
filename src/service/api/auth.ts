import { request } from '@/service/base'
import type { LoginQueryDto, RegisterQueryDto } from '@/service/dto/auth.dto'

export function loginRequest(data: LoginQueryDto) {
  return request({
    url: 'auth/login',
    params: data,
  })
}

export function registerRequest(data: RegisterQueryDto) {
  return request({
    url: 'auth/register',
    params: data,
  })
}
