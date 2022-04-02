import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useCallback } from 'react'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

export interface RegisterInputs {
  studentId: number

  password: string

  email: string

  username: string
}

export function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputs>()
  const handleRegister = useCallback(() => {}, [])

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {

  }

  const onError: SubmitErrorHandler<RegisterInputs> = () => {}

  return <>
    <Box component={'form'} noValidate onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack spacing={3}>
        <Stack direction={'row'} spacing={2}>
          <TextField label={'输入你的学号'} {...register('studentId', {
            required: true,
          })}/>
          <TextField label={'输入你学号的密码'} type={'password'}/>
        </Stack>
        <TextField label={'输入你的邮箱'} type={'email'}/>
        <TextField label={'≖‿≖✧ 起一个响亮的名字吧'}/>

        <Button sx={{ p: 2 }} variant={'contained'}>
          <Typography variant={'subtitle1'} onClick={handleRegister}>注册</Typography>
        </Button>
      </Stack>
    </Box>
  </>
}
