import { useState } from 'react'
// @mui
import { styled } from '@mui/material/styles'
import { Button, ClickAwayListener, Input, InputAdornment, Slide } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { SearchIcon } from '@/assets/svg/icon/search'
import cssStyles from '@/theme/utils/cssStyles'

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const SearchbarStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

// ----------------------------------------------------------------------

export function Searchbar() {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            <SearchIcon />
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  )
}
