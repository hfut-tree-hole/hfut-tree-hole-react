import { Button, List, ListItem, ListItemText } from '@mui/material'
import { useCallback } from 'react'
import { useTestModel } from '@/pages/Test/store/test.model'

let idx = 0

export function Test() {
  const store = useTestModel()

  const addTodo = useCallback(() => {
    store.addTodo(idx++)
  }, [])

  return <>
    <Button onClick={addTodo}>
      add todo
    </Button>
    <List>
      {
        store.todo.map(item => <ListItem key={item}>
          <ListItemText>{item}</ListItemText>
        </ListItem>)
      }
    </List>
  </>
}
