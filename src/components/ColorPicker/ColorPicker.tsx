import type { SxProps } from '@mui/material'
import { Box, Radio, RadioGroup } from '@mui/material'
import type { ChangeEvent } from 'react'
import { useCallback, useState } from 'react'
import { BaseIcon } from '@/components/base/BaseIcon/BaseIcon'
import type { CustomThemeOptions } from '@/theme/overrides'
import type { Fn } from '@/shared/types'

export function ColorPicker({ colors, onChange }: { colors: string[]; onChange: Fn }) {
  const [val, setVal] = useState(colors[0])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setVal(newColor)
    onChange(newColor)
  }, [])

  return (
    <RadioGroup row value={val} onChange={handleChange}>
      {colors.map((color) => {
        const isWhite = color === '#FFFFFF' || color === 'white'

        return (
          <Radio
            key={color}
            value={color}
            color="default"
            icon={
              <IconColor
                sx={{
                  ...(isWhite && {
                    border: (theme: CustomThemeOptions) => `solid 1px ${theme.palette.divider}`,
                  }),
                }}
              />
            }
            checkedIcon={
              <IconColor
                sx={{
                  'transform': 'scale(1.4)',
                  '&:before': {
                    opacity: 0.48,
                    width: '100%',
                    content: '\'\'',
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    boxShadow: '4px 4px 8px 0 currentColor',
                  },
                  '& svg': { width: 12, height: 12, color: 'common.white' },
                  ...(isWhite && {
                    'border': (theme: CustomThemeOptions) => `solid 1px ${theme.palette.divider}`,
                    'boxShadow': (theme: CustomThemeOptions) => `4px 4px 8px 0 ${theme.palette.grey[500_24]}`,
                    '& svg': { width: 12, height: 12, color: 'common.black' },
                  }),
                }}
              />
            }
            sx={{
              color,
              '&:hover': { opacity: 0.72 },
            }}
          />
        )
      })}
    </RadioGroup>
  )
}

function IconColor({ sx }: { sx: SxProps }) {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        display: 'flex',
        borderRadius: '50%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'currentColor',
        transition: theme =>
          theme.transitions.create('all', {
            duration: theme.transitions.duration.shortest,
          }),
        ...sx,
      }}
    >
      <BaseIcon icon={'eva:checkmark-fill'} />
    </Box>
  )
}
