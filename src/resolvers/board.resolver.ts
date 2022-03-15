import { Member } from 'src/entities/member.entity'
import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql'
import { Repository } from 'typeorm'

import { Board } from '../entities/board.entity'

@InputType()
export class BoardInput implements Partial<Board> {
  @Field()
  title: string
}

@Resolver()
export class BoardResolver {
  constructor(private memberRepository: Repository<Member>) {}

  @Query(() => [Board])
  async boards(): Promise<Board[]> {
    return Board.find()
  }

  @Query(() => Board, { nullable: true })
  async board(@Arg('id') id: string): Promise<Board | undefined> {
    return Board.findOne(id)
  }

  @Mutation(() => Board)
  async createBoard(@Arg('board') boardInput: BoardInput): Promise<Board | null> {
    // Default member id, will change to logged user
    const creator = await this.memberRepository.findOne('3f3a8386-4716-4dd1-8736-3769aeff91fe')
    if (!boardInput || !creator) {
      return null
    }
    const board = new Board()
    board.title = boardInput.title
    board.creator = creator
    return Board.save(board)
  }

  @Mutation(() => Board)
  async updateBoard(
    @Arg('id') id: string,
    @Arg('title', () => String, { nullable: true }) title: string
  ): Promise<Board> {
    const board = await Board.findOne(id)
    if (!board) {
      throw new Error('Invalid board ID')
    }
    if (typeof title !== 'undefined') {
      await Board.update({ id }, { title })
    }
    return board
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Arg('id') id: string): Promise<boolean> {
    try {
      await Board.delete(id)
    } catch (err) {
      throw new Error(`Invalid board ID, ${err}`)
    }
    return true
  }
}
