import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { ObjectType, Field, ID } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

import { Label } from './label.entity'
import { Member } from './member.entity'

@ObjectType()
@Entity()
class TaskStyle {
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

  @Field(_ => TaskStyle)
  @Property()
  style: TaskStyle

  @Field(_ => [Member])
  @Property({ nullable: true })
  members: Member[]

  @Field(_ => [Label])
  @Property({ nullable: true })
  labels?: Label[]

  @Field({ nullable: true })
  @Property({ type: 'text', nullable: true })
  startDate?: string

  @Field({ nullable: true })
  @Property({ type: 'text', nullable: true })
  dueDate?: string

  @Field()
  @Property({ type: 'boolean' })
  dueComplete?: boolean

  @Field(_ => [Comment])
  @Property({ nullable: true })
  comments?: Comment[]

  @Field(_ => [Checklist])
  @Property()
  checklists?: Checklist[]

  @Field()
  @Property({ type: 'boolean' })
  isArchived: boolean
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
