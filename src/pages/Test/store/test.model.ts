import { useState } from 'react'
import { createModel } from 'hox'

function useTest() {
  const [todo, setTodo] = useState<any[]>([])
  const addTodo = (list: any) => setTodo(prev => prev.concat(list))

  return {
    todo,
    addTodo,
  }
}

export const useTestModel = createModel(useTest)
