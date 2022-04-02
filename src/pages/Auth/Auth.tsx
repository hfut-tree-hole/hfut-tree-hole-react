import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function Auth() {
  return <>
    <Box className={'width-full height-screen flex justify-center items-center'}>
      <Outlet />
    </Box>
  </>
}
