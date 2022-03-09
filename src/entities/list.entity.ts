import { Entity, Property } from '@mikro-orm/core'
import { ObjectType, Field } from 'type-graphql'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class List {
  @Field()
  @Property()
  id!: string

  @Field()
  @Property({ type: 'text' })
  title!: string

  @Field(_ => [Task])
  @Property()
  tasks: Task[]
}
