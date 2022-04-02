import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function Auth() {
  return <>
    <Box className={'width-full height-full flex justify-center'}>
      <Outlet />
    </Box>
  </>
}
