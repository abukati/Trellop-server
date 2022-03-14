import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'

import { __prod__ } from './constants'
// import { ArchivedItem } from './entities/archive.entity'
import { Board } from './entities/board.entity'
import { Label } from './entities/label.entity'
import { List } from './entities/list.entity'
import { Member } from './entities/member.entity'
import { Task } from './entities/task.entity'
import { BoardResolver } from './resolvers/board.resolver'
import { TaskResolver } from './resolvers/task.resolver'

// import { seedDb } from './seeders/data'
// await seedDb(em)

const main = async () => {
  const connection = await createConnection({
    type: 'postgres',
    database: 'trellop',
    logging: true,
    synchronize: true,
    migrations: ['./migrations/*'],
    entities: [Board, List, Task, Label, Member]
  })

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [BoardResolver, TaskResolver],
      dateScalarMode: 'timestamp'
    }),
    context: ({ req, res }) => ({ req, res })
  })

  const app = express()

  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log(`server started on port 4000`)
  })
}

main().catch(err => {
  console.error(err)
})

// TODO: Connect between entities using pointers and not properties
