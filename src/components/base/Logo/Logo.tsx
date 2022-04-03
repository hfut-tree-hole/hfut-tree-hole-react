import logo from '@public/img/logo.png'
import { Box } from '@mui/material'
import { mountOptionalClsName } from '@/shared/utils/dom'

export function Logo(props: { className?: string }) {
  return <>
    <Box component={'img'} src={logo} className={`w-12 h-12 rounded-full ${mountOptionalClsName(props.className)} `}/>
  </>
}
