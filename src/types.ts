import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core'

export type emContext = {
  em: EntityManager<IDatabaseDriver<Connection>>
}

export type LabelModel = {
  id: string
  title: string
  color: LabelColor | null
  taskIds: string[]
}

export type LabelColor = 'green' | 'yellow' | 'orange' | 'red' | 'purple' | 'blue' | 'navy'

export interface ChecklistModel {
  id: string
  title: string
  items: ChecklistItemModel[]
}

export interface ChecklistItemModel {
  id: string
  title: string
  done: boolean
}

export interface CommentModel {
  id: string
  byMemberId: string
  text: string
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
  fromListId?: string
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
  background: string // | CoverColor
  fullCover: boolean
}

export interface BoardBackgroundModel {
  color: string
  image?: string
}

export type BoardModel = {
  id: string
  title: string
  createdBy: MemberModel
  background: BoardBackgroundModel
  members: MemberModel[]
  labels: LabelModel[]
  description?: string
  archive: ArchivedItem[]
  lists: ListModel[]
}

export type TaskModel = {
  id: string
  title: string
  style: CardCoveredModel
  labels?: LabelModel[]
  members?: MemberModel[]
  description?: string
  startDate?: string
  dueComlpete?: boolean
  dueDate?: string
  comments?: CommentModel[]
  checklists?: ChecklistModel[]
  isArchived?: boolean
}

export type ListModel = {
  id: string
  title: string
  tasks: TaskModel[]
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
