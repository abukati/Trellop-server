import { dummyMember1 } from './members'
import { label2, label3, label4, label6, label7 } from './labels'

export const dummyComment1 = {
  id: 'com101',
  byMemberId: 'u100',
  text: 'GraphQL is amazing!'
}

export const dummyComment2 = {
  id: 'c100',
  byMemberId: 'u100',
  text: 'MikrORM rocks!'
}

export const dummyChecklistItem1 = {
  id: 'todo100',
  title: 'todo one',
  done: false
}

export const dummyChecklistItem2 = {
  id: 'todo101',
  title: 'todo two',
  done: true
}

export const dummyChecklist1 = {
  id: 'check100',
  title: 'checklist one',
  items: [dummyChecklistItem1, dummyChecklistItem2]
}

export const dummyTask1 = {
  id: 't100',
  title: 'Set up external log in options.\nApple Id, google, facebook',
  description: '',
  style: {
    background: 'blue',
    fullCover: true
  },
  members: [],
  labels: [],
  startDate: null,
  dueDate: '1646087624876',
  dueComplete: false,
  comments: [dummyComment1],
  checklists: [],
  isArchived: false
}

export const dummyTask2 = {
  id: 'u2i2R5YfHi',
  title: "Header links should work when there's user auth",
  description: '',
  style: {
    background: 'blue',
    fullCover: true
  },
  members: [],
  labels: [],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  comments: [],
  checklists: [],
  isArchived: false
}

export const dummyTask3 = {
  id: 't101',
  title: "Some forms don't behave as expected",
  description: 'task two description',
  style: {
    background: 'blue',
    fullCover: true
  },
  members: [],
  labels: [label4, label3],
  startDate: '1545959831361',
  dueDate: null,
  dueComplete: false,
  comments: [dummyComment2],
  checklists: [dummyChecklist1],
  isArchived: false
}

export const dummyTask4 = {
  id: '8v4846hxDN',
  title: 'Users should be able to upload their own images as covers besides Unsplash',
  description: "This is a descriptive description for a task in a board that's going to be seeded",
  style: {
    background: '',
    fullCover: false
  },
  members: [],
  labels: [label7, label6],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  comments: [],
  checklists: [],
  isArchived: false
}

export const dummyTask5 = {
  id: 'WGeTBAh2hg',
  title: 'Web sockets optimization required',
  description: '',
  style: {
    background: 'red',
    fullCover: false
  },
  members: [dummyMember1],
  labels: [label2, label3],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  comments: [],
  checklists: [],
  isArchived: false
}

export const dummyTask6 = {
  id: '4UNvzIxfkU',
  title: 'Sidemenu needs to be worked on',
  description: '',
  style: {
    background: 'navy',
    fullCover: false
  },
  members: [],
  labels: [],
  startDate: null,
  dueDate: null,
  dueComplete: false,
  comments: [],
  checklists: [],
  isArchived: false
}
