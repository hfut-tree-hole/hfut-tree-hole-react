import { ColorPicker } from '@/components/ColorPicker/ColorPicker'
import palette from '@/theme/theme-config/palette'

const colors = [
  palette.primary.main,
  palette.info.main,
  palette.success.main,
  palette.warning.main,
  palette.error.main,
  palette.info.darker,
  palette.error.darker,
]

export function TodoConfirm() {
  return <>
    <ColorPicker colors={colors} />
  </>
}
