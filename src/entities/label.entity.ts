import { Entity, Property } from '@mikro-orm/core'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Label {
  @Field()
  @Property()
  id!: string

  @Field()
  @Property({ type: 'text' })
  title?: string

  @Field()
  @Property({ type: 'text' })
  color: string
}
