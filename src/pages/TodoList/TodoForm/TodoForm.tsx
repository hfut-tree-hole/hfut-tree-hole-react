import { Box, Button, Card, DialogActions, IconButton, Stack, TextField, Tooltip } from '@mui/material'
import { useCallback, useState } from 'react'
import { LocalizationProvider, MobileDateTimePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import { getTime } from 'date-fns'
import { ColorPicker } from '@/components/ColorPicker/ColorPicker'
import palette from '@/theme/theme-config/palette'
import { BaseIcon } from '@/components/base/BaseIcon/BaseIcon'
import { validateWithHelperText } from '@/shared/utils/utils'
import type { EventPayload } from '@/pages/TodoList/store/todo.model'
import useTodoModel from '@/pages/TodoList/store/todo.model'
import type { Fn } from '@/shared/types'

const colors = [
  palette.primary.main,
  palette.info.main,
  palette.success.main,
  palette.warning.main,
  palette.error.main,
  palette.info.darker,
  palette.error.darker,
]

export interface TodoFormProps {
  /*
  * is selected event
  *
  * @default false
  */
  isSelected: boolean

  /*
  * a range or an selected event
  *
  * @default undefined
  */
  payload?: EventPayload

  handleCancel: Fn
}

type Inputs = {
  title: string
  desc: string
  startTime: Date
  endTime: Date
}

export function TodoForm({ isSelected = false, payload, handleCancel }: TodoFormProps) {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<Inputs>({
    mode: 'onChange',
  })

  const store = useTodoModel()

  const [title, setTitle] = useState<string>(payload?.title || '')
  const [desc, setDesc] = useState<string>(payload?.extendedProps?.desc || '')
  const [startDate, setStartDate] = useState<Date | number>((payload?.start as number) || new Date())
  const [endDate, setEndDate] = useState<Date | number>((payload?.end as number) || new Date())

  const [curColor, setCurColor] = useState<string>(payload?.textColor || colors[0])
  const onColorChange = useCallback((color: string) => setCurColor(color), [])

  const onCancel = useCallback(() => handleCancel(), [])

  const addEvent = (data: Inputs) => {
    store.addEvents({
      title: data.title,
      start: new Date(data.startTime).getTime(),
      end: new Date(data.endTime).getTime(),
      textColor: curColor,
      desc: data.desc,
    })
    onCancel()
  }

  const handleDelete = useCallback(() => {
    store.deleteEvent(payload!)
    onCancel()
  }, [])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addEvent(data)
  }

  const onError: SubmitErrorHandler<Inputs> = (err) => {
    console.log(err)
  }

  return <>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Card>
        <Stack spacing={3} sx={{ p: 3 }}>

          <TextField
            label={'??????'}
            value={title}

            {...validateWithHelperText(errors?.title)}
            {...register('title', {
              required: { value: true, message: '???(???????? ???????????)??? ???????????????????????????' },
              maxLength: { value: 20, message: ' (/= _ =)/~?????? ????????????????????????20' },
              onChange: e => setTitle(e.target.value),
            })}/>

          <TextField
            label={'????????????'}
            value={desc}
            multiline
            rows={5}
            {...validateWithHelperText(errors?.desc)}
            {...register('desc', {
              required: { value: true, message: ' ??? ????????? ???????????????????????????' },
              maxLength: { value: 100, message: ' (/= _ =)/~?????? ????????????????????????20' },
              onChange: e => setDesc(e.target.value),
            })}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateTimePicker
              label="????????????"
              inputFormat="yyyy/MM/dd hh:mm a"
              renderInput={params => <TextField {...params} {...register('startTime', {
                required: true,
              })} fullWidth />}
              onChange={date => setStartDate(date!)}
              date={startDate}
              value={startDate}
            />

            <MobileDateTimePicker
              label="????????????"
              inputFormat="yyyy/MM/dd hh:mm a"
              onChange={date => setEndDate(date!)}
              renderInput={params => <TextField
                {...params} {...register('endTime',
                  {
                    required: true,
                    validate: () => getTime(new Date(getValues().endTime)) - getTime(new Date(getValues().startTime)) >= 0,
                  })}
                fullWidth
                {...validateWithHelperText(errors.endTime, ' (/= _ =)/~?????? ??????????????????????????????????????????')}
              />}
              date={endDate}
              value={endDate}
            />
          </LocalizationProvider>

          <ColorPicker colors={colors} onChange={onColorChange} activeColor={payload?.textColor}/>

          <DialogActions style={{ padding: 0 }}>
            {
              isSelected
                ? <Tooltip title="????????????">
                  <IconButton onClick={handleDelete}>
                    <BaseIcon icon="eva:trash-2-outline" width={20} height={20} />
                  </IconButton>
                </Tooltip>
                : <></>
            }
            <Box sx={{ flexGrow: 1 }} />

            <Button variant="outlined" color="inherit" onClick={onCancel}>
              ??????
            </Button>

            <Button variant={'contained'} type="submit">
              ??????
            </Button>
          </DialogActions>
        </Stack>
      </Card>
    </form>
  </>
}
