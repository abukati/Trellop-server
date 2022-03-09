import { Resolver, Query, Ctx, Arg } from 'type-graphql'
import { Board } from '../entities/board.entity'
import { emContext } from '../types'

@Resolver()
export class BoardResolver {
  @Query(() => [Board])
  boards(@Ctx() { em }: emContext): Promise<Board[]> {
    return em.find(Board, {})
  }

  @Query(() => Board, { nullable: true })
  board(@Arg('id', () => String) id: string, @Ctx() { em }: emContext): Promise<Board | null> {
    return em.findOne(Board, { id })
  }
}
