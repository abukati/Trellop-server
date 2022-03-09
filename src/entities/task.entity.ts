import { Entity, Property } from '@mikro-orm/core'
import { ObjectType, Field } from 'type-graphql'
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
  @Field()
  @Property()
  id!: string

  @Field()
  @Property({ type: 'text' })
  title!: string

  @Field()
  @Property({ type: 'text', nullable: true })
  description?: string

  @Field(_ => TaskStyle)
  @Property()
  style: TaskStyle

  @Field(_ => [Member])
  @Property({ nullable: true })
  members?: Member[]

  @Field(_ => [Label])
  @Property({ nullable: true })
  labels?: Label[]

  @Field({ nullable: true })
  @Property({ type: 'date', nullable: true })
  startDate?: EpochTimeStamp

  @Field({ nullable: true })
  @Property({ type: 'date', nullable: true })
  dueDate?: EpochTimeStamp

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
  @Field()
  @Property()
  id!: string

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
  @Field()
  @Property()
  id!: string

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
  @Field()
  @Property()
  id!: string

  @Field()
  @Property({ type: 'text', nullable: true })
  title: string

  @Field()
  @Property({ type: 'boolean' })
  done: boolean
}
