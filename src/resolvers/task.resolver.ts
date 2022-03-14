import { Resolver, Query, Arg, Mutation, InputType, Field } from 'type-graphql'

import { Task } from '../entities/task.entity'

@InputType()
class TaskInput extends Task {
  @Field()
  title: string
}

@Resolver()
export class TaskResolver {
  // TODO: Build query for tasks by board and list id

  @Query(() => [Task])
  async tasks(): Promise<Task[]> {
    return Task.find()
  }

  @Mutation(() => Task)
  async createTask(@Arg('task') taskInput: TaskInput): Promise<Task | null> {
    if (!taskInput) {
      return null
    }
    return Task.create(taskInput).save()
  }

  @Mutation(() => Task)
  async updateTask(
    @Arg('id') id: string,
    @Arg('title', () => String, { nullable: true }) title: string
  ): Promise<Task | null> {
    const task = await Task.findOne(id)
    if (!task) {
      throw new Error(`Invalid task ID ${id}`)
    }
    if (typeof title !== 'undefined') {
      await Task.update({ id }, { title })
    }
    return task
  }

  @Mutation(() => Boolean)
  async deleteTask(@Arg('id') id: string): Promise<boolean> {
    try {
      await Task.delete(id)
    } catch (err) {
      throw new Error(`Invalid board ID, ${err}`)
    }
    return true
  }
}
