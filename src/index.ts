import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'

import { __prod__ } from './constants'
import { Board } from './entities/board.entity'
import mikroOrmConfig from './mikro-orm.config'
import { BoardResolver } from './resolvers/board.resolver'

import dummyBoard from './data/board'

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig)
  await orm.getMigrator().up()
  const em = orm.em.fork()

  const app = express()

  const board = em.create(Board, dummyBoard)
  await em.persistAndFlush(board)

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [BoardResolver],
      validate: false
    }),
    context: () => ({ em })
  })
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
