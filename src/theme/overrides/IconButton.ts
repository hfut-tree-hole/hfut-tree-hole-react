import { overrideComp } from '@/theme/overrides/index'

export const IconButton = overrideComp(theme => ({
  MuiIconButton: {
    styleOverrides: {
      root: {
        'transition': 'transform 200ms',
        '&:hover': {
          transform: 'scale(1.1)',
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  },
}))
