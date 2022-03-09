import { Entity, Property } from '@mikro-orm/core'
import { Field, ObjectType } from 'type-graphql'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class ArchivedItem {
  @Field()
  @Property()
  fromListId?: string

  @Field()
  @Property()
  item: Task

  @Field()
  @Property()
  index: number
}
