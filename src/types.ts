import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core'

export type emContext = {
  em: EntityManager<IDatabaseDriver<Connection>>
}

export type LabelModel = {
  id: string
  title?: string
  color: LabelColor | null
}

export type LabelColor = 'green' | 'yellow' | 'orange' | 'red' | 'purple' | 'blue' | 'navy'

export interface ChecklistModel {
  id: string
  boardId: string
  taskId: string
  checklistItems: ChecklistItemModel[]
  title: string
}

export interface ChecklistItemModel {
  id: string
  title: string
  done: boolean
}

export interface CommentModel {
  board?: BoardModel
  task?: TaskModel
  list?: ListModel
  text?: string
}

export interface BadgesModel {
  checkItems: number
  checkItemsDone: number
  comments: number
  description: boolean
  due?: Date
  dueComlpete: boolean
  start?: Date
  watching: boolean
}

export type ArchivedItem = {
  fromList?: string
  item: TaskModel
  index: number
}

export type CoverColor =
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'purple'
  | 'blue'
  | 'cyan'
  | 'lightgreen'
  | 'pink'
  | 'navy'

export interface CardCoveredModel {
  background: CoverColor | string
  fullCover: boolean
}

export interface BoardBackgroundModel {
  backgroundMainColor: string | null
  backgroundTopColor: string | null
  backgroundBrightness: 'dark' | 'light' | 'unknown'
  backgroundTile: boolean
  backgroundImage?: string
}

export type BoardModel = {
  id: string
  title: string
  createdBy: MemberModel
  background?: BoardBackgroundModel
  members: MemberModel[]
  labels: LabelModel[]
  description?: string
  archive: ArchivedItem[]
  url?: string
  lists: ListModel[]
}

export type TaskModel = {
  id: string
  title: string
  style: CardCoveredModel
  labels?: LabelModel[]
  members?: MemberModel[]
  description?: string
  startDate?: Date
  dueComlpete?: boolean
  dueDate?: Date
  comments?: CommentModel[]
  checklists?: ChecklistModel[]
  isArchived?: boolean
}

export type ListModel = {
  id: string
  title: string
  tasks: TaskModel[]
  watching?: boolean
}

export type MemberModel = {
  id: string
  username: string
  fullname: string
  image?: string
  starredIds: string[]
  watchlist: string[]
}

export type User = MemberModel & {
  password: string
  email?: string
}
