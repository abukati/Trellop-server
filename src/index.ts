import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'

import { __prod__ } from './constants'
import mikroOrmConfig from './mikro-orm.config'
import { BoardResolver } from './resolvers/board.resolver'

// import { seedDb } from './seeds'

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

  // await seedDb(em)

  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log(`server started on port 4000`)
  })
}

main().catch(err => {
  console.error(err)
})
