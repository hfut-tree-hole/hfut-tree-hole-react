import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Box } from '@mui/material'

export function Footer() {
  return (
    <Box className={'absolute bottom-5 text-center w-full'}>
      <Typography variant="body2" color="text.secondary" align="center" >
        {'Copyright © '}
        <Link color="inherit" href="https://www.github.com/snowingfox">
          HFUT树洞
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  )
}
