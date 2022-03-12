import {
  Collection,
  Embeddable,
  Embedded,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property
} from '@mikro-orm/core'
import { ObjectType, Field, ID } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { Board } from './board.entity'

import { Label } from './label.entity'
import { List } from './list.entity'
import { Member } from './member.entity'

@ObjectType()
@Embeddable()
export class TaskStyle {
  @Field()
  @Property({ nullable: true })
  background: string

  @Field()
  @Property()
  fullCover: boolean
}

@ObjectType()
@Entity()
export class Task {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field()
  @Property({ type: 'text' })
  title!: string

  @Field({ nullable: true })
  @Property({ type: 'text', nullable: true })
  description?: string

  @Field()
  @Embedded(() => TaskStyle)
  style: TaskStyle

  @Field({ nullable: true })
  @Property({ type: 'text', nullable: true })
  startDate: string

  @Field({ nullable: true })
  @Property({ type: 'text', nullable: true })
  dueDate: string

  @Field()
  @Property({ type: 'boolean' })
  dueComplete: boolean

  @Field()
  @Property({ type: 'boolean' })
  isArchived: boolean

  // Might be completely useless
  @Field(() => ID)
  @ManyToOne(() => Board)
  boardId: Board['id']

  // Same. It's either chaining top to bottom (board -> list -> task),
  // or storing ID references here for board & list.
  // TODO: Test
  @Field(() => ID)
  @ManyToOne(() => List)
  listId: List['id']

  @Field(() => [Label])
  @ManyToMany(() => Label, 'taskIds', { owner: true })
  labels = new Collection<Label>(this)

  @Field(() => [Member])
  @ManyToMany(() => Member)
  members = new Collection<Member>(this)

  // @Field(() => [Comment])
  // @OneToMany()
  // comments?: Comment[]

  // @Field(_ => [Checklist])
  // @Property()
  // checklists?: Checklist[]\
}

@ObjectType()
@Entity()
export class Comment {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field()
  @Property()
  byMemberId!: string

  @Field()
  @Property({ type: 'text', nullable: true })
  text: string
}

@ObjectType()
@Entity()
export class Checklist {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field()
  @Property({ type: 'text' })
  title: string

  @Field(_ => [ChecklistItem])
  @Property()
  items: ChecklistItem[]
}

@ObjectType()
@Entity()
export class ChecklistItem {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field()
  @Property({ type: 'text', nullable: true })
  title: string

  @Field()
  @Property({ type: 'boolean' })
  done: boolean
}
