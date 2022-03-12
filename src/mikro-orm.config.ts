import path from 'path'
import { MikroORM } from '@mikro-orm/core'

import { __prod__ } from './constants'
import { ArchivedItem } from './entities/archive.entity'
import { Board, BoardBackground } from './entities/board.entity'
import { Label } from './entities/label.entity'
import { List } from './entities/list.entity'
import { Member } from './entities/member.entity'
import { Checklist, ChecklistItem, Comment, Task, TaskStyle } from './entities/task.entity'

export default {
  seeder: {
    path: path.join(__dirname, './seeders'),
    defaultSeeder: 'DatabaseSeeder',
    glob: '!(*.d).{js,ts}'
  },
  migrations: {
    path: path.join(__dirname, './migrations'),
    glob: '!(*.d).{js,ts}'
  },
  entities: [
    Board,
    BoardBackground,
    List,
    Task,
    TaskStyle,
    ArchivedItem,
    Label,
    Member,
    Checklist,
    ChecklistItem,
    Comment
  ],
  dbName: 'trellop',
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0]
