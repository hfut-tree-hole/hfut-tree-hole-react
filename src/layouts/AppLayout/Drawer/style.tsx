import { alpha, styled } from '@mui/material/styles'
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { ICON, NAVBAR } from '@/shared/config/theme'
import type { CustomThemeOptions } from '@/theme/overrides'

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== 'activeRoot' && prop !== 'activeSub' && prop !== 'subItem',
})(({ activeRoot, theme }: { activeRoot: boolean; theme: CustomThemeOptions }) => ({
  ...theme.typography.body2,
  position: 'relative',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  // activeRoot
  ...(activeRoot && {
    ...theme.typography.subtitle2,
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
  // // activeSub
  // ...(activeSub && {
  //   ...theme.typography.subtitle2,
  //   color: theme.palette.text.primary,
  // }),
  // // subItem
  // ...(subItem && {
  //   height: NAVBAR.DASHBOARD_ITEM_SUB_HEIGHT,
  // }),
}))

export const ListSubheaderStyle = styled(props => <ListSubheader disableSticky disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.overline,
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  }),
)

export const ListItemTextStyle = styled(ListItemText, {
  shouldForwardProp: prop => prop !== 'isCollapse',
})(({ theme }: { theme: CustomThemeOptions }) => ({
  whiteSpace: 'nowrap',
  transition: theme.transitions.create(['width', 'opacity'], {
    duration: theme.transitions.duration.shorter,
  }),
  color: 'inherit',
}))

export const ListItemIconStyle = styled(ListItemIcon)({
  'width': ICON.NAVBAR_ITEM,
  'height': ICON.NAVBAR_ITEM,
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  '& svg': { width: '100%', height: '100%' },
  'color': 'inherit',
})
