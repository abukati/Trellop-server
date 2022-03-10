import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { ObjectType, Field } from 'type-graphql'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class List {
  @Field({ nullable: true })
  @PrimaryKey()
  id!: string

  @Field({ nullable: true })
  @Property({ type: 'text' })
  title!: string

  @Field(_ => [Task], { nullable: true })
  @Property()
  tasks: Task[]
}
