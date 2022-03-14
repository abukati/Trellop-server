import { ObjectType, Field } from 'type-graphql'
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Board } from './board.entity'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class List extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field()
  @Column()
  title!: string

  @Field(() => [Task])
  @OneToMany(() => Task, task => task.list)
  tasks: Task[]

  @Field(() => Board)
  @ManyToOne(() => Board, board => board.lists)
  board!: Board
}
