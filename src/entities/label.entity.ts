import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ID, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

@ObjectType()
@Entity()
export class Label {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', unique: true })
  id = uuidv4()

  @Field({ nullable: true })
  @Property({ type: 'text' })
  title: string

  @Field({ nullable: true })
  @Property({ type: 'text' })
  color: string
}
