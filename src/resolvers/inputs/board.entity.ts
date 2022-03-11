import { InputType, Field } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

import { ArchivedItem } from '../../entities/archive.entity'
import { Label } from '../../entities/label.entity'
import { List } from '../../entities/list.entity'
import { Member } from '../../entities/member.entity'
import { Board, BoardBackground } from '../../entities/board.entity'
import { BoardBackgroundModel } from '../../types'

@InputType()
export class NewBoardInput extends Board {
  @Field(() => String)
  id = uuidv4()

  @Field()
  title: string

  // @Field()
  // background: BoardBackgroundModel

  // @Field(() => Member)
  // createdBy: Member

  @Field()
  description: string

  // @Field(() => [Member])
  // members: Member[]

  // @Field(() => [Label])
  // labels: Label[]

  // @Field(() => [ArchivedItem])
  // archive: ArchivedItem[]

  // @Field(() => [List])
  // lists: List[]
}

@InputType()
export class UpdateBoardInput extends Board {
  @Field(() => String)
  id: string

  @Field()
  title: string

  // @Field({ nullable: true })
  // background: BoardBackground
}
