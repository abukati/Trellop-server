import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql'

import { Board } from '../entities/board.entity'

@InputType()
export class BoardInput extends Board {
  @Field()
  title: string
}

@Resolver()
export class BoardResolver {
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
    if (!boardInput) {
      return null
    }
    return Board.create(boardInput).save()
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
