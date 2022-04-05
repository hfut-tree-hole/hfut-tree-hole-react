import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import * as _ from 'lodash'
import storage from 'good-storage'
import { useNavigate } from 'react-router-dom'
import { validateWithHelperText } from '@/shared/utils/utils'
import { EmailPattern } from '@/shared/utils/pattern'
import { TipMessage } from '@/components/Alert/Alert'
import { loginRequest, registerRequest } from '@/service/api/auth'
import { wrapAsync } from '@/hooks/use-async'
import { TOKEN_KEY } from '@/shared/constant'

export interface RegisterInputs {
  studentId: number

  password: string

  email: string

  username: string
}

export function AuthForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputs>({
    mode: 'onChange',
  })
  const navigate = useNavigate()
  const handleRegister = useCallback(() => {}, [])
  const [isFirstLogin, setIsFirstLogin] = useState(false)

  const handleLogin = useCallback(async(data: RegisterInputs) => {
    if (!isFirstLogin) {
      const { state, error } = await wrapAsync(() => loginRequest(data))
      if (error) {
        if (error.status === 406) {
          TipMessage({
            message: error.data.msg,
            type: 'error',
          })
        } else if (error.status === 404) {
          // it means this time is the user's first login
          setIsFirstLogin(true)
        }
      }
      if (state) {
        TipMessage({
          message: state.data.msg,
          type: 'success',
        })
        storage.set(TOKEN_KEY, state.data.token)
        navigate('/')
      }
    } else {
      const { state, error } = await wrapAsync(() => registerRequest(data))
      if (error) {
        TipMessage({
          message: error.data.msg,
          type: 'error',
        })
      }
      if (state) {
        const response = state.data
        TipMessage({
          message: response.msg,
          type: 'success',
        })
        storage.set(TOKEN_KEY, response.token)
        navigate('/')
      }
    }
  }, [isFirstLogin])

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    handleLogin(data as RegisterInputs)
  }

  const onError: SubmitErrorHandler<RegisterInputs> = (err) => {
    TipMessage({
      message: '同学, 你填写的表单有错误哎Σ(ŎдŎ|||)ﾉﾉ',
      duration: 5000,
      type: 'error',
    })
  }

  return <>
    <Box component={'form'} noValidate onSubmit={handleSubmit(onSubmit, onError)} className={'relative w-full pb-12'}>
      <Stack spacing={3}>
        {
          isFirstLogin
            ? <>
              <Alert variant="outlined" severity="info">
                同学是第一次进入树洞噢，填写一些个人信息让大家认识你吧
              </Alert>
            </>
            : <></>
        }
        <TextField
          label={'输入你的学号'}
          {...validateWithHelperText(errors.studentId, '学号只能为数字噢')}
          {...register('studentId', {
            required: { value: true, message: '学号不能为空噢' },
            minLength: { value: 10, message: '学号格式错啦' },
            maxLength: { value: 10, message: '学号格式错啦' },
            validate: (value) => {
              const numVal = parseInt(value as unknown as string)
              return !isNaN(numVal) && _.isNumber(numVal)
            },
          })}
        />
        <TextField
          label={'输入你学号的密码'}
          {...validateWithHelperText(errors.password)}
          {...register('password', {
            required: { value: true, message: '密码不能为空噢' },
          })}
          type={'password'}/>
        {
          isFirstLogin
            ? <>
              <TextField
                label={'输入你的邮箱'}
                type={'email'}
                {...validateWithHelperText(errors.email)}
                {...register('email', {
                  required: { value: true, message: '邮箱不能为空噢' },
                  pattern: { value: EmailPattern, message: '邮箱格式错啦' },
                })} /><TextField
                label={'≖‿≖✧ 起一个响亮的名字吧'}
                {...validateWithHelperText(errors.username)}
                {...register('username', {
                  required: { value: true, message: '没有名字怎么让大家认识你呀' },
                  maxLength: { value: 20, message: '名字最大长度只能是20个字符噢' },
                })} />
            </>
            : <></>
        }

        <Button sx={{ p: 2 }} variant={'contained'} type={'submit'}>
          <Typography variant={'subtitle1'} onClick={handleRegister}>进入树洞世界</Typography>
        </Button>

      </Stack>
    </Box>
  </>
}
