import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ID, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

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

  @Field(_ => [String])
  @Property()
  starredIds?: string[]

  @Field(_ => [String], { nullable: true })
  @Property()
  watchlist?: string[]
}
