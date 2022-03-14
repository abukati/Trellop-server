import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

// import { Board } from './board.entity'
import { Task } from './task.entity'

@ObjectType()
@Entity()
export class ArchivedItem {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field()
  @Column()
  item: Task

  @Field()
  @Column()
  index: number

  // @Field()
  // @Column()
  // listId: string

  // @Field(() => String!)
  // @ManyToOne(() => Board)
  // boardId: string
}
