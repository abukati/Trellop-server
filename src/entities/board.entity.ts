import {
  Cascade,
  Collection,
  Embeddable,
  Embedded,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
  Unique,
  UuidType
} from '@mikro-orm/core'
import { Field, ID, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

import { ArchivedItem } from './archive.entity'
import { Label } from './label.entity'
import { List } from './list.entity'
import { Member } from './member.entity'

// @ObjectType()
// @Entity()
// export class BoardBackground {
//   @Field(() => ID)
//   @PrimaryKey({ type: 'uuid', unique: true })
//   id = uuidv4()

//   @Field({ nullable: true })
//   @Property()
//   color: string

//   @Field({ nullable: true })
//   @Property({ nullable: true })
//   image: string

//   // @Field()
//   // @OneToOne(() => Board, board => board.background)
//   // boardId: string
// }

@ObjectType()
@Embeddable()
export class BoardBackground {
  @Field()
  @Property()
  color: string

  @Field({ nullable: true })
  @Property({ nullable: true })
  image: string
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
  @Property({ type: 'text', nullable: true })
  description: string

  @Field()
  // { inversedBy: 'boardId' }
  // @OneToOne(() => BoardBackground)
  @Embedded({ entity: () => BoardBackground, object: true })
  background!: BoardBackground

  @Field(() => [ID])
  @ManyToMany(() => Member)
  members = new Collection<Member['id']>(this)

  @Field(() => ID)
  @ManyToOne(() => Member)
  createdById: Member['id']

  @Field(() => [ID])
  @OneToMany({ entity: () => List, mappedBy: list => list.boardId })
  listIds = new Collection<List['id']>(this)

  @Field(() => [ID])
  @OneToMany({ entity: () => Label, mappedBy: label => label.boardId })
  labels = new Collection<Label['id']>(this)

  @Field(() => [ID])
  @OneToMany({ entity: () => ArchivedItem, mappedBy: archivedItem => archivedItem.boardId, orphanRemoval: true })
  archive = new Collection<ArchivedItem['item']['id']>(this)
}
