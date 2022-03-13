import { Resolver, Query, Ctx, Arg, Mutation } from 'type-graphql'

import { emContext } from '../types'
import { Task } from '../entities/task.entity'

@Resolver()
export class TaskResolver {
  @Query(() => [Task])
  tasks(@Arg('boardId') id: string, @Ctx() { em }: emContext): Promise<Task[]> {
    return em.find(Task, { boardId: id })
  }

  // @Query(() => Board, { nullable: true })
  // board(@Arg('boardId') id: string, @Ctx() { em }: emContext): Promise<Board | null> {
  //   return em.findOne(Board, { id })
  // }

  // @Mutation(() => Board)
  // async createBoard(@Arg('newBoard') boardInput: NewBoardInput, @Ctx() { em }: emContext): Promise<Board | null> {
  //   if (!boardInput) {
  //     return null
  //   }
  //   const board = em.create(Board, boardInput)
  //   await em.persistAndFlush(board)
  //   return board
  // }

  // @Mutation(() => Board)
  // async updateBoard(
  //   @Arg('boardId') boardId: string,
  //   @Arg('updatedBoard') updatedBoardInput: UpdateBoardInput,
  //   @Ctx() { em }: emContext
  // ): Promise<Board> {
  //   const board = await em.findOne(Board, boardId)
  //   if (!board) {
  //     throw new Error('Invalid board ID')
  //   }

  //   const newBoard = em.create(Board, updatedBoardInput)
  //   await em.persistAndFlush(newBoard)
  //   return newBoard
  // }

  // @Mutation(() => Boolean)
  // async deleteBoard(@Arg('boardId') boardId: string, @Ctx() { em }: emContext): Promise<boolean> {
  //   try {
  //     await em.nativeDelete(Board, boardId)
  //   } catch (e) {
  //     throw new Error(`Invalid board ID, ${e}`)
  //   }
  //   return true
  // }
}
