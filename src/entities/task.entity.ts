import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

// import { Board } from './board.entity'
import { Label } from './label.entity'
import { List } from './list.entity'
// import { Member } from './member.entity'

@ObjectType()
class TaskStyle {
  @Field({ nullable: true })
  background: string

  @Field()
  fullCover: boolean
}

@ObjectType()
@Entity()
export class Task extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field()
  @Column()
  title!: string

  @Field()
  @Column({ nullable: true })
  description?: string

  @Field(() => TaskStyle)
  @Column('simple-json', { default: { background: null, fullCover: false } })
  style: { background: string; fullCover: boolean }

  @Field()
  @Column({ nullable: true, type: 'timestamp' })
  startDate?: EpochTimeStamp

  @Field()
  @Column({ nullable: true, type: 'timestamp' })
  dueDate?: EpochTimeStamp

  @Field()
  @Column()
  dueComplete: boolean

  @Field()
  @Column()
  isArchived: boolean

  @Field(() => List)
  @ManyToOne(() => List, list => list.tasks)
  list: List

  @Field(() => [Label])
  @ManyToMany(() => Label, label => label.tasks, { eager: true })
  @JoinTable()
  labels: Label[]
}
