import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'
import type { ThemeOptions } from '@mui/material'
import shadows, { customShadows } from './theme-config/shadows'
import type { ThemeMode } from '@/theme/theme-config/palette'
import palette from '@/theme/theme-config/palette'
import type { CustomThemeOptions } from '@/theme/overrides'
import { mergeOverrideComps } from '@/theme/overrides'
import typography from '@/theme/theme-config/typography'
import { getMode, onModeChange } from '@/shared/rxjs/mode-listener'

export default function ThemeConfig(props: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getMode())
  const themeOptions = useMemo<CustomThemeOptions>(() => {
    return {
      palette,
      shadows: shadows[mode],
      customShadows: customShadows[mode],
      shape: { borderRadius: 8 },
      typography,
      mode,
    }
  }, [mode])
  onModeChange((currentMode) => {
    setMode(currentMode)
  })

  const theme = createTheme(themeOptions as unknown as ThemeOptions)
  theme.components = mergeOverrideComps(theme as unknown as any)

  return <>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </>
}
