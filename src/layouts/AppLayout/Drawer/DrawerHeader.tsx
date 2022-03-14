import { Box } from '@mui/material'
import Logo from '@/assets/imgs/logo.png'

export function DrawerHeader() {
  return <>
    <Box className={'flex flex-col p-5'}>
      <div className={'mb-5'}>
        <img className={'w-12 h-12 rounded-full'} src={Logo} />
      </div>
      <div className={'flex bg-gray-100 rounded-lg p-4 items-center'}>
        <div className={'w-10 h-10'}>
          <img className={'rounded-full'} src={'http://p3.music.126.net/F3sugpmX0WXG0lZkqVkG2g==/109951166049791621.jpg?param=200y200'}/>
        </div>
        <div className={'flex flex-col ml-3'}>
          <p className={'text-base font-semibold'}>name</p>
          <p className={'text-sm text-gray-500'}>status</p>
        </div>
      </div>
    </Box>
  </>
}
