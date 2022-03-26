import { AnimatePresence, m } from 'framer-motion'
import type { DialogProps, SxProps } from '@mui/material'
import { Box, Dialog, Paper } from '@mui/material'
import type { ReactNode } from 'react'
import type { Fn } from '@/shared/types'

interface Props {
  open: boolean
  onClose: Fn
  children: ReactNode
  sx?: SxProps
  variants?: string
  other?: DialogProps
}

export function DialogAnimate({ open, variants, onClose, children, sx, ...other }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={props => (
            <Box
              component={m.div}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box onClick={onClose} sx={{ width: '100%', height: '100%', position: 'fixed' }} />
              <Paper sx={sx} {...props}>
                {props.children}
              </Paper>
            </Box>
          )}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  )
}
