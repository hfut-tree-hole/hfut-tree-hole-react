import type { Theme } from '@mui/material'
import { Box, Card, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import bgImg from './bg.png'
import { Logo } from '@/components/base/Logo/Logo'
import { AuthForm } from '@/pages/Auth/AuthForm'

const AuthStyle = styled(Card)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
  },
  boxSizing: 'content-box',
}))

export function Auth() {
  return <>
    <Box className={'w-screen h-screen flex justify-center items-center overflow-hidden'}>
      <Box className={'absolute w-full h-full'}>
        <img src={bgImg} className={'absolute w-full h-full object-cover'}/>
        <Box className={'absolute w-full h-full z-1'} sx={{
          backgroundColor: 'rgba(0,0,0,.4)',
        }}/>
      </Box>
      <AuthStyle
        className={'absolute z-3 bg-white p-8 pb-0 flex items-center flex-col w-screen h-screen md:h-auto md:w-3/5 lg:w-4/12'}
      >
        <Stack spacing={2} className={'mb-8 items-center'}>
          <Logo/>
          <Typography variant={'h4'}>
            进入树洞
          </Typography>
          <Typography variant={'body2'} className={'text-slate-500'}>
            验证账号开启树洞之旅
          </Typography>
        </Stack>
        <AuthForm />
      </AuthStyle>
    </Box>
  </>
}
