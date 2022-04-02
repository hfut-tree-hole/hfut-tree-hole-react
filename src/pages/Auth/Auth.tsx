import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import bgImg from './bg.jpg'

export function Auth() {
  return <>
    <Box className={'w-screen h-screen flex justify-center items-center overflow-hidden'}>
      <Box className={'absolute w-full h-full'}>
        <img src={bgImg} className={'absolute w-full h-full object-cover'}/>
        <Box className={'absolute w-full h-full z-1'} sx={{
          backgroundColor: 'rgba(0,0,0,.4)',
        }}/>
      </Box>
      <Box className={'absolute z-3 bg-white p-5 rounded-lg shadow-lg shadow-slate-700'}>
        <Outlet />
      </Box>
    </Box>
  </>
}
