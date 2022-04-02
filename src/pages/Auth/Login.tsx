import { Box, Stack, TextField } from '@mui/material'

export function Login() {
  console.log('login')
  return <>
    <Box
      component={'form'}
    >
      <Stack>
        <TextField label={'输入学号或者用户名'}/>
      </Stack>
    </Box>
  </>
}
