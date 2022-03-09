import { Entity, Property } from '@mikro-orm/core'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Member {
  @Field()
  @Property()
  id!: string

  @Field()
  @Property()
  username!: string

  @Field()
  @Property()
  fullname!: string

  @Field()
  @Property()
  image?: string

  @Field(_ => [String])
  @Property()
  starredIds?: string[]

  @Field(_ => [String])
  @Property()
  watchlist?: string[]
}
