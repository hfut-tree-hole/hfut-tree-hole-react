import { Box } from '@mui/material'
import Logo from '/img/logo.png'
import { useAuth } from '@/hooks/use-auth'

export function DrawerHeader() {
  const user = useAuth()
  return <>
    <Box className={'flex flex-col p-5'}>
      <div className={'mb-5'}>
        <img className={'w-12 h-12 rounded-full'} src={Logo} />
      </div>
      <div className={'flex bg-gray-100 rounded-lg p-4 items-center'}>
        <div className={'w-10 h-10'}>
          <img className={'rounded-full'} src={user.avatar}/>
        </div>
        <div className={'flex flex-col ml-3'}>
          <p className={'text-base font-semibold'}>name</p>
          <p className={'text-sm text-gray-500'}>status</p>
        </div>
      </div>
    </Box>
  </>
}
