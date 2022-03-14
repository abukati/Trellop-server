import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

import { Board } from './board.entity'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class Label extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field()
  @Column({ nullable: true })
  title?: string

  @Field()
  @Column()
  color!: string

  @Field(() => [Task])
  @ManyToMany(() => Task, task => task.labels)
  tasks: Task[]

  @Field(() => Board)
  @ManyToOne(() => Board, board => board.labels)
  board: Board
}
