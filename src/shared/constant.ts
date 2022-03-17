export const enum RESPONSE_DESIGN {
  sm = 640,
  md = 720,
  lg = 1024,
  xl = 1280,
  xl2 = 1536,
}

export const MODE_KEY = '__MODE_KEY__'

export const USER_KEY = '__USER_KEY__'

const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
