import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ObjectType } from 'type-graphql'
import { ArchivedItem } from './archive.entity'

import { Label } from './label.entity'
import { List } from './list.entity'
import { Member } from './member.entity'

@ObjectType()
@Entity()
export class BoardBackground {
  @Field()
  @Property({ nullable: true })
  color: string

  @Field()
  @Property()
  image?: string
}

@ObjectType()
@Entity()
export class Board {
  @Field()
  @PrimaryKey()
  id!: string

  @Field()
  @Property({ type: 'text' })
  title: string

  @Field()
  @Property()
  createdBy: Member

  @Field()
  @Property()
  background: BoardBackground

  @Field(_ => [Member])
  @Property()
  members: Member[]

  @Field(_ => [Label])
  @Property()
  labels: Label[]

  @Field()
  @Property({ type: 'text', nullable: true })
  description?: string

  @Field(_ => [ArchivedItem])
  @Property()
  archive: ArchivedItem[]

  @Field(_ => [List])
  @Property()
  lists: List[]
}
