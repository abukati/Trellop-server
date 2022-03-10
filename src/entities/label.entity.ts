import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Label {
  @Field({ nullable: true })
  @PrimaryKey()
  id!: string

  @Field({ nullable: true })
  @Property({ type: 'text' })
  title?: string

  @Field({ nullable: true })
  @Property({ type: 'text' })
  color: string
}
