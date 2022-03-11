import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { ObjectType, Field, ID } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

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

  @Field(_ => [Task])
  @Property()
  tasks: Task[]
}
