import * as process from 'process'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ServiceConfig } from '@/shared/config/service'
import { addInterceptor, getResponseDataInterceptor } from '@/service/interceptor'

export function createInstance(config: AxiosRequestConfig = {}) {
  const instance = axios.create(config)
  addInterceptor(instance, { response: getResponseDataInterceptor })

  return instance
}

const baseInstance = createInstance({ baseURL: ServiceConfig.baseURL })

export function request(config: AxiosRequestConfig = { method: 'get' }) {
  if (!config.method) {
    if (process.env.mode === 'dev') {
      console.warn('method cannot be undefined, but system let it to be #get automatically')
    }
    config.method = 'get'
  }

  return baseInstance(config)
}
