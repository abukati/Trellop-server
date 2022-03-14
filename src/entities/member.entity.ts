import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

import { Board } from './board.entity'
// import { Task } from './task.entity'

@ObjectType()
@Entity()
export class Member extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field()
  @Column()
  username!: string

  @Field()
  @Column()
  fullname!: string

  @Field()
  @Column({ nullable: true })
  image?: string

  @Field(() => [Board])
  @ManyToMany(() => Board, board => board.members)
  boards: Board[]

  @Field(() => [Board])
  @OneToMany(() => Board, board => board.creator)
  boardsCreated: Board[]

  // @Field(() => [String])
  // @ManyToMany(() => Task, task => task.members)
  // taskMembership = new Collection<Task['id'][]>(this)

  // @Field(() => [ID])
  // @OneToMany(() => Board, board => board.members)
  // starredIds = new Collection<Board['id']>(this)

  // @Field(_ => [String], { nullable: true })
  // @Property()
  // watchlist?: string[]
}
