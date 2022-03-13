import { EntityManager } from '@mikro-orm/core'
import { Seeder } from '@mikro-orm/seeder'
import { v4 as uuidv4 } from 'uuid'

import { Board } from '../entities/board.entity'
import { Label } from '../entities/label.entity'
import { List } from '../entities/list.entity'
import { Member } from '../entities/member.entity'
import { Task } from '../entities/task.entity'

const member1Id = uuidv4()
const member2Id = uuidv4()
const label1Id = uuidv4()
const label2Id = uuidv4()
const task1Id = uuidv4()
const task2Id = uuidv4()
const task3Id = uuidv4()
const list1Id = uuidv4()
const board1Id = uuidv4()

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const member1 = em.create(Member, {
      id: member1Id,
      fullname: 'art bkt',
      username: 'art',
      image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
      boardsMembership: [board1Id],
      taskMembership: [task1Id]
    })
    const member2 = em.create(Member, {
      id: member2Id,
      fullname: 'test test',
      username: 'testtttttttt',
      image: null,
      boardsMembership: [board1Id],
      taskMembership: [task1Id, task2Id]
    })

    const label1 = em.create(Label, {
      id: label1Id,
      title: 'label1 title',
      color: 'green',
      boardId: board1Id,
      taskIds: [task1Id, task2Id]
    })
    const label2 = em.create(Label, {
      id: label2Id,
      title: 'label2 title attention',
      color: 'yellow',
      boardId: board1Id,
      taskIds: [task1Id]
    })

    const task1 = em.create(Task, {
      id: task1Id,
      title: 'Task 1 title',
      description: 'Seeder task 1 test',
      style: { background: 'blue', fullCover: true },
      startDate: null,
      dueDate: 1646087624876,
      dueComplete: false,
      isArchived: false,
      boardId: board1Id,
      listId: list1Id,
      labels: [label1Id, label2Id],
      members: [member1Id, member2Id]
    })
    const task2 = em.create(Task, {
      id: task2Id,
      title: 'Task two title',
      description: 'Seeder task two test',
      style: { background: 'red', fullCover: false },
      startDate: 1545959831361,
      dueDate: 1646087624876,
      dueComplete: true,
      isArchived: false,
      boardId: board1Id,
      listId: list1Id,
      labels: [label1Id],
      members: [member2Id]
    })
    const task3 = em.create(Task, {
      id: task3Id,
      title: 'Task three title archived',
      description: 'Seeder task three test archived',
      style: { background: 'navy', fullCover: false },
      startDate: 1545959831361,
      dueDate: null,
      dueComplete: true,
      isArchived: true,
      boardId: board1Id,
      listId: list1Id,
      labels: [],
      members: []
    })

    const list1 = em.create(List, {
      id: list1Id,
      title: 'List 1 title',
      boardId: board1Id,
      taskIds: [task1Id, task2Id]
    })

    const board = em.create(Board, {
      id: board1Id,
      title: 'Board 1 title',
      description: 'Board 1 description from seeder',
      background: { color: '#0079bf', image: '' },
      members: [member1Id, member2Id],
      createdById: member1Id,
      listIds: [list1Id],
      labels: [label1Id, label2Id],
      archive: [task3Id]
    })
  }
}
