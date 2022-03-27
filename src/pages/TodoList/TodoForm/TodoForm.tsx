import { Box, Button, Card, DialogActions, IconButton, Stack, TextField, Tooltip } from '@mui/material'
import { useCallback, useState } from 'react'
import { LocalizationProvider, MobileDateTimePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import { getTime } from 'date-fns'
import type { EventInput } from '@fullcalendar/common'
import { ColorPicker } from '@/components/ColorPicker/ColorPicker'
import palette from '@/theme/theme-config/palette'
import { BaseIcon } from '@/components/base/BaseIcon/BaseIcon'
import { validateWithHelperText } from '@/shared/utils/utils'
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
  payload?: EventInput

  handleCancel: Fn
}

type Inputs = {
  title: string
  desc: string
  startTime: Date
  endTime: Date

}

export function TodoForm({ isSelected = false, payload, handleCancel }: TodoFormProps) {
  const { register, handleSubmit, control, getValues, formState: { errors } } = useForm<Inputs>({
    mode: 'onChange',
  })

  const store = useTodoModel()

  const handleDelete = useCallback(() => {}, [])

  const [startDate, setStartDate] = useState((payload?.start) || new Date())
  const [endDate, setEndDate] = useState((payload?.end) || new Date())

  const [curColor, setCurColor] = useState<string>(colors[0])
  const onColorChange = useCallback((color: string) => setCurColor(color), [])

  const onCancel = useCallback(() => handleCancel(), [])

  const addEvent = (data: Inputs) => {
    store.addEvents({ title: data.title, start: new Date(data.startTime), end: new Date(data.endTime), textColor: curColor })
    onCancel()
  }

  const onSubmit: SubmitHandler<Inputs> = data => addEvent(data)

  const onError: SubmitErrorHandler<Inputs> = () => {}

  return <>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Card>
        <Stack spacing={3} sx={{ p: 3 }}>

          <TextField
            label={'标题'}
            {...validateWithHelperText<Inputs>(errors, 'title', 'required', { error: true, helperText: '╮(๑•́ ₃•̀๑)╭ 你好像忘记填标题了' })}
            {...register('title', {
              required: true,
              maxLength: 20,
            })}/>

          <TextField
            label={'详细描述'}
            multiline
            rows={5}
            {...validateWithHelperText<Inputs>(errors, 'desc', 'required', { error: true, helperText: ' ◔ ‸◔？ 这里好像不能为空噢' })}
            {...register('desc', {
              required: true,
              maxLength: 100,
            })}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              control={control}
              render={
                () => <MobileDateTimePicker
                  label="开始时间"
                  inputFormat="yyyy/MM/dd hh:mm a"
                  renderInput={params => <TextField {...params} {...register('startTime', {
                    required: true,
                  })} fullWidth />}
                  onChange={date => setStartDate(date)}
                  date={startDate}
                  value={startDate}
                />
              } />

            <Controller
              control={control}
              render={
                () => <MobileDateTimePicker
                  label="结束时间"
                  inputFormat="yyyy/MM/dd hh:mm a"
                  onChange={date => setEndDate(date)}
                  renderInput={params => <TextField
                    {...params} {...register('endTime',
                      {
                        required: true,
                        validate: () => getTime(new Date(getValues().endTime)) - getTime(new Date(getValues().startTime)) >= 0,
                      })}
                    fullWidth
                    {...validateWithHelperText<Inputs>(errors, 'endTime', 'validate', { error: true, helperText: ' (/= _ =)/~┴┴ 结束时间怎么会小于开始时间嘛' })}
                  />}
                  date={endDate}
                  value={endDate}

                />
              } />
          </LocalizationProvider>

          <ColorPicker colors={colors} onChange={onColorChange}/>

          <DialogActions style={{ padding: 0 }}>
            {
              isSelected
                ? <Tooltip title="删除事件">
                  <IconButton onClick={handleDelete}>
                    <BaseIcon icon="eva:trash-2-outline" width={20} height={20} />
                  </IconButton>
                </Tooltip>
                : <></>
            }
            <Box sx={{ flexGrow: 1 }} />

            <Button variant="outlined" color="inherit" onClick={onCancel}>
              取消
            </Button>

            <Button variant={'contained'} type="submit">
              添加
            </Button>
          </DialogActions>
        </Stack>
      </Card>
    </form>
  </>
}
