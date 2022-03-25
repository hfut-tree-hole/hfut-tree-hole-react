import { useLocalObservable } from 'mobx-react'
import type { EventSourceInput } from '@fullcalendar/react'
import { action, makeObservable, observable } from 'mobx'

interface ITodoStore {
  events: EventSourceInput[]
}

class TodoStoreClass implements ITodoStore {
  @observable events: EventSourceInput[] = [{
    title: 'event1',
    start: '2022-03-01',
  }]

  constructor() {
    makeObservable(this)
  }

  @action
  addEvents(event: EventSourceInput) {
    this.events = [event]
  }
}

const TodoStore = new TodoStoreClass()

export default TodoStore
