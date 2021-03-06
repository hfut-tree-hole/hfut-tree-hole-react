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
      message: '??????, ????????????????????????????????(??????|||)??????',
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
                ?????????????????????????????????????????????????????????????????????????????????
              </Alert>
            </>
            : <></>
        }
        <TextField
          label={'??????????????????'}
          {...validateWithHelperText(errors.studentId, '????????????????????????')}
          {...register('studentId', {
            required: { value: true, message: '?????????????????????' },
            minLength: { value: 10, message: '??????????????????' },
            maxLength: { value: 10, message: '??????????????????' },
            validate: (value) => {
              const numVal = parseInt(value as unknown as string)
              return !isNaN(numVal) && _.isNumber(numVal)
            },
          })}
        />
        <TextField
          label={'????????????????????????'}
          {...validateWithHelperText(errors.password)}
          {...register('password', {
            required: { value: true, message: '?????????????????????' },
          })}
          type={'password'}/>
        {
          isFirstLogin
            ? <>
              <TextField
                label={'??????????????????'}
                type={'email'}
                {...validateWithHelperText(errors.email)}
                {...register('email', {
                  required: { value: true, message: '?????????????????????' },
                  pattern: { value: EmailPattern, message: '??????????????????' },
                })} /><TextField
                label={'???????????? ???????????????????????????'}
                {...validateWithHelperText(errors.username)}
                {...register('username', {
                  required: { value: true, message: '???????????????????????????????????????' },
                  maxLength: { value: 20, message: '???????????????????????????20????????????' },
                })} />
            </>
            : <></>
        }

        <Button sx={{ p: 2 }} variant={'contained'} type={'submit'}>
          <Typography variant={'subtitle1'} onClick={handleRegister}>??????????????????</Typography>
        </Button>

      </Stack>
    </Box>
  </>
}
