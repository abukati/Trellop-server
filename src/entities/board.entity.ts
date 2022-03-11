import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ID, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

import { ArchivedItem } from './archive.entity'
import { Label } from './label.entity'
import { List } from './list.entity'
import { Member } from './member.entity'

@ObjectType()
@Entity()
export class BoardBackground {
  @Field({ nullable: true })
  @Property({ nullable: true })
  color: string

  @Field({ nullable: true })
  @Property()
  image?: string
}

@ObjectType()
@Entity()
export class Board {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field()
  @Property({ type: 'text' })
  title!: string

  @Field()
  @Property()
  createdBy: Member

  @Field({ nullable: true })
  @Property({ nullable: true })
  background: BoardBackground

  @Field(_ => [Member])
  @Property()
  members?: Member[]

  @Field(_ => [Label])
  @Property()
  labels?: Label[]

  @Field()
  @Property({ type: 'text', nullable: true })
  description?: string

  @Field(_ => [ArchivedItem])
  @Property()
  archive: ArchivedItem[]

  @Field(_ => [List])
  @Property()
  lists?: List[]
}
