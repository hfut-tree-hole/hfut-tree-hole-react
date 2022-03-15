import type { SxProps } from '@mui/material'
import { Box } from '@mui/material'

function SvgIconStyle({ src, sx }: { src: string; sx: SxProps }) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}

    />
  )
}

const getIcon = (name: string) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />

export const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking'),
}
