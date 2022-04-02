import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useCallback } from 'react'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import * as _ from 'lodash'
import { validateWithHelperText } from '@/shared/utils/utils'
import { EmailPattern } from '@/shared/utils/pattern'

export interface RegisterInputs {
  studentId: number

  password: string

  email: string

  username: string
}

export function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputs>({
    mode: 'onChange',
  })
  const handleRegister = useCallback(() => {}, [])

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data)
  }

  const onError: SubmitErrorHandler<RegisterInputs> = (err) => {
    console.log(err)
  }

  return <>
    <Box component={'form'} noValidate onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack spacing={3}>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label={'输入你的学号'}
            {...validateWithHelperText(errors.studentId, '学号只能为数字噢')}
            {...register('studentId', {
              required: { value: true, message: '学号不能为空噢' },
              minLength: { value: 10, message: '学号格式错啦' },
              maxLength: { value: 10, message: '学号格式错啦' },
              validate: value => !isNaN(value) && _.isNumber(value),
            })}
          />
          <TextField
            label={'输入你学号的密码'}
            {...validateWithHelperText(errors.password)}
            {...register('password', {
              required: { value: true, message: '密码不能为空噢' },
            })}
            type={'password'}/>
        </Stack>
        <TextField
          label={'输入你的邮箱'}
          type={'email'}
          {...validateWithHelperText(errors.email)}
          {...register('email', {
            required: { value: true, message: '邮箱不能为空噢' },
            pattern: { value: EmailPattern, message: '邮箱格式错啦' },
          })}
        />
        <TextField
          label={'≖‿≖✧ 起一个响亮的名字吧'}
          {...validateWithHelperText(errors.username)}
          {...register('username', {
            required: { value: true, message: '没有名字怎么让大家认识你呀' },
            maxLength: { value: 20, message: '名字最大长度只能是20个字符噢' },
          })}
        />

        <Button sx={{ p: 2 }} variant={'contained'} type={'submit'}>
          <Typography variant={'subtitle1'} onClick={handleRegister}>注册</Typography>
        </Button>
      </Stack>
    </Box>
  </>
}
