import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core'
import { ObjectType, Field, ID } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { Board } from './board.entity'

import { Task } from './task.entity'

@ObjectType()
@Entity()
export class List {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field({ nullable: true })
  @Property({ type: 'text' })
  title: string

  @Field(() => [Task])
  @OneToMany({ entity: () => Task, mappedBy: task => task.listId })
  tasks = new Collection<Task>(this)

  @Field(() => ID)
  @ManyToOne(() => Board)
  boardId: Board['id']
}
