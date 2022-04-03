import logo from '@public/img/logo.png'
import { Box } from '@mui/material'

export function Logo(props: { className?: string }) {
  return <>
    <Box component={'img'} src={logo} className={`${props.className ? props.className : 'w-12 h-12'} rounded-full`}/>
  </>
}
