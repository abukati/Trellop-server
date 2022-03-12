import { v4 } from 'uuid'
import { dummyMember1 } from './members'
import { label2, label3, label4, label6, label7 } from './labels'
import { dummyList1 } from './lists'
import { newBoard } from './board'

// export const dummyComment1 = {
//   id: v4(),
//   byMemberId: dummyMember1.id,
//   text: 'GraphQL is amazing!'
// }

// export const dummyComment2 = {
//   id: v4(),
//   byMemberId: 'u100',
//   text: 'MikrORM rocks!'
// }

// export const dummyChecklistItem1 = {
//   id: v4(),
//   title: 'todo one',
//   done: false
// }

// export const dummyChecklistItem2 = {
//   id: v4(),
//   title: 'todo two',
//   done: true
// }

// export const dummyChecklist1 = {
//   id: v4(),
//   title: 'checklist one',
//   items: [dummyChecklistItem1, dummyChecklistItem2]
// }

export const dummyTask1 = {
  id: v4(),
  boardId: null,
  listId: null,
  title: 'Set up external log in options.\nApple Id, google, facebook',
  description: '',
  style: {
    id: v4(),
    background: 'blue',
    fullCover: true
  },
  // members: [],
  labels: [],
  startDate: null,
  dueDate: '1646087624876',
  dueComplete: false,
  // comments: [dummyComment1],
  // checklists: [],
  isArchived: false
}

export const dummyTask2 = {
  id: v4(),
  boardId: null,
  listId: null,
  title: "Header links should work when there's user auth",
  description: '',
  style: {
    id: v4(),
    background: 'blue',
    fullCover: true
  },
  // members: [],
  labels: [],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  // comments: [],
  // checklists: [],
  isArchived: false
}

export const dummyTask3 = {
  id: v4(),
  boardId: null,
  listId: null,
  title: "Some forms don't behave as expected",
  description: 'task two description',
  style: {
    id: v4(),
    background: 'blue',
    fullCover: true
  },
  // members: [],
  labels: [],
  startDate: '1545959831361',
  dueDate: null,
  dueComplete: false,
  // comments: [dummyComment2],
  // checklists: [dummyChecklist1],
  isArchived: false
}

export const dummyTask4 = {
  id: v4(),
  boardId: null,
  listId: null,
  title: 'Users should be able to upload their own images as covers besides Unsplash',
  description: "This is a descriptive description for a task in a board that's going to be seeded",
  style: {
    id: v4(),
    background: '',
    fullCover: false
  },
  // members: [],
  labels: [],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  // comments: [],
  // checklists: [],
  isArchived: false
}

export const dummyTask5 = {
  id: v4(),
  boardId: null,
  listId: null,
  title: 'Web sockets optimization required',
  description: '',
  style: {
    id: v4(),
    background: 'red',
    fullCover: false
  },
  // members: [],
  labels: [],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  // comments: [],
  // checklists: [],
  isArchived: false
}

export const dummyTask6 = {
  id: v4(),
  boardId: null,
  listId: null,
  title: 'Sidemenu needs to be worked on',
  description: '',
  style: {
    id: v4(),
    background: 'navy',
    fullCover: false
  },
  // members: [],
  labels: [],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  // comments: [],
  // checklists: [],
  isArchived: false
}
