import { v4 } from 'uuid'
import { dummyTask1, dummyTask2, dummyTask3, dummyTask4, dummyTask5, dummyTask6 } from './tasks'

export const dummyList1 = {
  id: v4(),
  title: 'Backlog',
  tasks: [
    {
      ...dummyTask1
    },
    {
      ...dummyTask2
    },
    {
      ...dummyTask3
    },
    {
      ...dummyTask4
    },
    {
      ...dummyTask5
    },
    {
      ...dummyTask6
    }
  ]
}
