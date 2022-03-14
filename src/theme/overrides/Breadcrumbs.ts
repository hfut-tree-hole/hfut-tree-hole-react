// ----------------------------------------------------------------------

import type { CustomThemeOptions } from '@/theme/overrides/index'

export default function Breadcrumbs(theme: CustomThemeOptions) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
      },
    },
  }
}
