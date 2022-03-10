import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'

import { __prod__ } from './constants'
import mikroOrmConfig from './mikro-orm.config'
import { BoardResolver } from './resolvers/board.resolver'

import { Board } from './entities/board.entity'
import { List } from './entities/list.entity'
import { Task, Comment, Checklist, ChecklistItem } from './entities/task.entity'
import { Member } from './entities/member.entity'
import { Label } from './entities/label.entity'

import dummyBoard from './data/board'
import { label1, label2, label3, label4, label5, label6, label7 } from './data/labels'
import {
  dummyComment1,
  dummyComment2,
  dummyChecklistItem1,
  dummyChecklistItem2,
  dummyChecklist1,
  dummyTask1,
  dummyTask2,
  dummyTask3,
  dummyTask4,
  dummyTask5,
  dummyTask6
} from './data/tasks'
import { dummyMember1 } from './data/members'
import { dummyList1 } from './data/lists'

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig)
  await orm.getMigrator().up()
  const em = orm.em.fork()

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [BoardResolver],
      validate: false
    }),
    context: () => ({ em })
  })

  const dlabel1 = em.create(Label, label1)
  const dlabel2 = em.create(Label, label2)
  const dlabel3 = em.create(Label, label3)
  const dlabel4 = em.create(Label, label4)
  const dlabel5 = em.create(Label, label5)
  const dlabel6 = em.create(Label, label6)
  const dlabel7 = em.create(Label, label7)
  await em.persistAndFlush([dlabel1, dlabel2, dlabel3, dlabel4, dlabel5, dlabel6, dlabel6, dlabel7])

  const member = em.create(Member, dummyMember1)
  await em.persistAndFlush(member)

  const comment1 = em.create(Comment, dummyComment1)
  const comment2 = em.create(Comment, dummyComment2)
  await em.persistAndFlush([comment1, comment2])

  const checklistItem1 = em.create(ChecklistItem, dummyChecklistItem1)
  const checklistItem2 = em.create(ChecklistItem, dummyChecklistItem2)
  await em.persistAndFlush([checklistItem1, checklistItem2])

  const checklist1 = em.create(Checklist, dummyChecklist1)
  await em.persistAndFlush(checklist1)

  const task1 = em.create(Task, dummyTask1)
  const task2 = em.create(Task, dummyTask2)
  const task3 = em.create(Task, dummyTask3)
  const task4 = em.create(Task, dummyTask4)
  const task5 = em.create(Task, dummyTask5)
  const task6 = em.create(Task, dummyTask6)
  await em.persistAndFlush([task1, task2, task3, task4, task5, task6])

  const list1 = em.create(List, dummyList1)
  // const list2 = em.create(List, dummyList2)
  // const list3 = em.create(List, dummyList3)
  // const list4 = em.create(List, dummyList4)
  await em.persistAndFlush(list1)

  const board = em.create(Board, dummyBoard)
  await em.persistAndFlush(board)

  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log(`server started on port 4000`)
  })
}

main().catch(err => {
  console.error(err)
})

// const board2 = em.create(Board, { id: 'board2', title: 'Board number 2', createdAt: new Date() })
// const board3 = em.create(Board, { id: 'board3', title: 'Board number 3', createdAt: new Date() })
// em.persist([board, board2, board3]).flush()
