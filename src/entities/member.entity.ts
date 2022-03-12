import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ID, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { Board } from './board.entity'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class Member {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field({ nullable: true })
  @Property()
  username!: string

  @Field({ nullable: true })
  @Property()
  fullname!: string

  @Field({ nullable: true })
  @Property()
  image?: string

  @Field(() => ID)
  @ManyToMany(() => Board, board => board.members)
  boardsMembership = new Collection<Board['id']>(this)

  @Field(() => ID)
  @ManyToMany(() => Task, task => task.members)
  taskMembership = new Collection<Task['id']>(this)

  // @Field(_ => [String])
  // @Property()
  // starredIds?: string[]

  // @Field(_ => [String], { nullable: true })
  // @Property()
  // watchlist?: string[]
}
