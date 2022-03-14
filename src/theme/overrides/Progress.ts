// ----------------------------------------------------------------------

import type { CustomThemeOptions } from '@/theme/overrides/index'

export default function Progress(theme: CustomThemeOptions) {
  const isLight = theme.mode === 'light'

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: 'hidden',
        },
        bar: {
          borderRadius: 4,
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary[isLight ? 'lighter' : 'darker'],
        },
        buffer: {
          backgroundColor: 'transparent',
        },
      },
    },
  }
}
