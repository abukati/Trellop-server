import { Board } from '../../entities/board.entity'
import { List } from '../../entities/list.entity'
import { Task, Comment, Checklist, ChecklistItem } from '../../entities/task.entity'
import { Member } from '../../entities/member.entity'
import { Label } from '../../entities/label.entity'

import dummyBoard, { newBoard } from './board'
import { label1, label2, label3, label4, label5, label6, label7 } from './labels'
import {
  // dummyComment1,
  // dummyComment2,
  // dummyChecklistItem1,
  // dummyChecklistItem2,
  // dummyChecklist1,
  dummyTask1,
  dummyTask2,
  dummyTask3,
  dummyTask4,
  dummyTask5,
  dummyTask6
} from './tasks'
import { dummyMember1 } from './members'
import { dummyList1 } from './lists'
import { emContext } from 'src/types'

export const seedDb = async (em: emContext['em']) => {
  const dlabel1 = em.create(Label, label1)
  const dlabel2 = em.create(Label, label2)
  const dlabel3 = em.create(Label, label3)
  const dlabel4 = em.create(Label, label4)
  const dlabel5 = em.create(Label, label5)
  const dlabel6 = em.create(Label, label6)
  const dlabel7 = em.create(Label, label7)
  await em.persistAndFlush([dlabel1, dlabel2, dlabel3, dlabel4, dlabel5, dlabel6, dlabel6, dlabel7])

  // const comment1 = em.create(Comment, dummyComment1)
  // const comment2 = em.create(Comment, dummyComment2)
  // await em.persistAndFlush([comment1, comment2])

  // const checklistItem1 = em.create(ChecklistItem, dummyChecklistItem1)
  // const checklistItem2 = em.create(ChecklistItem, dummyChecklistItem2)
  // await em.persistAndFlush([checklistItem1, checklistItem2])

  // const checklist1 = em.create(Checklist, dummyChecklist1)
  // await em.persistAndFlush(checklist1)
  const board = em.create(Board, newBoard)
  await em.persistAndFlush(board)

  const list1 = em.create(List, dummyList1)
  // // const list2 = em.create(List, dummyList2)
  // // const list3 = em.create(List, dummyList3)
  // // const list4 = em.create(List, dummyList4)
  await em.persistAndFlush(list1)

  const task1 = em.create(Task, dummyTask1)
  const task2 = em.create(Task, dummyTask2)
  const task3 = em.create(Task, dummyTask3)
  const task4 = em.create(Task, dummyTask4)
  const task5 = em.create(Task, dummyTask5)
  const task6 = em.create(Task, dummyTask6)
  await em.persistAndFlush([task1, task2, task3, task4, task5, task6])

  const member = em.create(Member, dummyMember1)
  await em.persistAndFlush(member)
}
