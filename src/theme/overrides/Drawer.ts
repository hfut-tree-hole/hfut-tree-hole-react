import { alpha } from '@mui/material'
import type { CustomThemeOptions } from '@/theme/overrides/index'

// ----------------------------------------------------------------------

export default function Drawer(theme: CustomThemeOptions) {
  const isLight = theme.mode === 'light'

  return {
    MuiDrawer: {
      styleOverrides: {
        modal: {
          '&[role="presentation"]': {
            '& .MuiDrawer-paperAnchorLeft': {
              boxShadow: `8px 24px 24px 12px ${alpha(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`,
            },
            '& .MuiDrawer-paperAnchorRight': {
              boxShadow: `-8px 24px 24px 12px ${alpha(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`,
            },
          },
        },
      },
    },
  }
}
