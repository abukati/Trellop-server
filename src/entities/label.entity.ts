import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ID, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { Board } from './board.entity'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class Label {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id: string = uuidv4()

  @Field({ nullable: true })
  @Property({ type: 'text' })
  title: string

  @Field({ nullable: true })
  @Property({ type: 'text' })
  color: string

  @Field(() => [ID], { nullable: true })
  @ManyToMany(() => Task, task => task.labels, { nullable: true })
  taskIds = new Collection<Task['id'][]>(this)

  @Field(() => ID)
  @ManyToOne(() => Board)
  boardId: Board['id']
}
