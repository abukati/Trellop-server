import { v4 } from 'uuid'
import { LabelModel } from 'src/types'
import { dummyTask1, dummyTask2, dummyTask3, dummyTask4, dummyTask5, dummyTask6 } from './tasks'
import { Label } from 'src/entities/label.entity'

export const label1: LabelModel = {
  id: v4(),
  title: 'done',
  color: 'green',
  taskIds: []
}

export const label2: LabelModel = {
  id: v4(),
  title: 'attention',
  color: 'yellow',
  taskIds: []
}

export const label3: LabelModel = {
  id: v4(),
  title: 'urgent',
  color: 'orange',
  taskIds: []
}

export const label4: LabelModel = {
  id: v4(),
  title: 'bug',
  color: 'red',
  taskIds: []
}

export const label5: LabelModel = {
  id: v4(),
  title: '',
  color: 'purple',
  taskIds: []
}

export const label6: LabelModel = {
  id: v4(),
  title: '',
  color: 'blue',
  taskIds: []
}

export const label7: LabelModel = {
  id: v4(),
  title: 'idea',
  color: 'navy',
  taskIds: []
}
