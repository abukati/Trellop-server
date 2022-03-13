import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ID, ObjectType } from 'type-graphql'
import { Board } from './board.entity'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class ArchivedItem {
  @Field(() => ID)
  @PrimaryKey()
  fromListId?: string

  @Field()
  @Property()
  item: Task

  @Field()
  @Property()
  index: number

  @Field(() => ID)
  @ManyToOne(() => Board)
  boardId: Board['id']
}
