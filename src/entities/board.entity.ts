import { Field, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'

// import { ArchivedItem } from './archive.entity'
import { Label } from './label.entity'
import { List } from './list.entity'
import { Member } from './member.entity'

@ObjectType()
class BoardBackground {
  @Field()
  color: string

  @Field({ nullable: true })
  image?: string
}

@ObjectType()
@Entity()
export class Board extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field()
  @Column()
  title!: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string

  @Field(() => BoardBackground)
  @Column('simple-json', { default: { color: '#0079bf', image: undefined } })
  background: { color: string; image?: string }

  @Field(() => [Member], { nullable: true })
  @ManyToMany(() => Member, member => member.boards, { nullable: true, eager: true })
  @JoinTable()
  members: Member[]

  @Field(() => Member)
  @ManyToOne(() => Member, { eager: true })
  creator: Member

  @Field(() => [List])
  @OneToMany(() => List, list => list.board)
  lists: List[]

  @Field(() => [List])
  @OneToMany(() => Label, label => label.board)
  labels: Label[]

  // @Field(() => [ArchivedItem])
  // @OneToMany({
  //   entity: () => ArchivedItem,
  //   mappedBy: archivedItem => archivedItem.boardId,
  //   orphanRemoval: true
  // })
  // archive = new Collection<ArchivedItem['item'][]>(this)
}
