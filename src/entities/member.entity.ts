import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Member {
  @Field({ nullable: true })
  @PrimaryKey({ nullable: true })
  id!: string

  @Field({ nullable: true })
  @Property()
  username!: string

  @Field({ nullable: true })
  @Property()
  fullname!: string

  @Field({ nullable: true })
  @Property()
  image?: string

  @Field(_ => [String], { nullable: true })
  @Property()
  starredIds?: string[]

  @Field(_ => [String], { nullable: true })
  @Property()
  watchlist?: string[]
}
