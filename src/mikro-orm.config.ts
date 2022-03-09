import { MikroORM } from '@mikro-orm/core'
import path from 'path'
import { __prod__ } from './constants'
import { Board } from './entities/board.entity'

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    glob: '!(*.d).{js,ts}'
  },
  entities: [Board],
  dbName: 'trellop',
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0]
