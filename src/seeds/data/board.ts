import { dummyList1 } from './lists'
import { dummyMember1 } from './members'
import { label1, label2, label3, label4, label5, label6, label7 } from './labels'

import { v4 } from 'uuid'

console.log(v4())

export const newBoard = {
  title: 'updated board',
  id: v4(),
  createdBy: {
    id: v4(),
    username: 'ArtiomB',
    fullname: 'Artiom bkt',
    image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
    starredIds: [],
    watchlist: []
  },
  background: {
    color: '#0079bf',
    image: ''
  },
  members: [],
  labels: [
    {
      id: v4(),
      title: 'done',
      color: 'green'
    },
    {
      id: v4(),
      title: 'attention',
      color: 'yellow'
    },
    {
      id: v4(),
      title: 'urgent',
      color: 'orange'
    },
    {
      id: v4(),
      title: 'bug',
      color: 'red'
    },
    {
      id: v4(),
      title: '',
      color: 'purple'
    },
    {
      id: v4(),
      title: '',
      color: 'blue'
    },
    {
      id: v4(),
      title: 'idea',
      color: 'navy'
    }
  ],
  description: '',
  archive: [],
  lists: [
    {
      id: v4(),
      title: 'Backlog',
      tasks: [
        {
          id: v4(),
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
          comments: [],
          checklists: [],
          isArchived: false
        },
        {
          id: v4(),
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
        },
        {
          id: v4(),
          title: "Some forms don't behave as expected",
          description: 'task two description',
          style: {
            background: 'blue',
            fullCover: true
          },
          members: [],
          labels: [
            {
              id: v4(),
              title: 'urgent',
              color: 'orange'
            },
            {
              id: v4(),
              title: 'bug',
              color: 'red'
            }
          ],
          startDate: '1545959831361',
          dueDate: null,
          dueComplete: false,
          comments: [],
          checklists: [],
          isArchived: false
        },
        {
          id: v4(),
          title: 'Users should be able to upload their own images as covers besides Unsplash',
          description: "This is a descriptive description for a task in a board that's going to be seeded",
          style: {
            background: '',
            fullCover: false
          },
          members: [],
          labels: [
            {
              id: v4(),
              title: '',
              color: 'blue'
            },
            {
              id: v4(),
              title: 'idea',
              color: 'navy'
            }
          ],
          startDate: null,
          dueDate: null,
          dueComplete: false,
          comments: [],
          checklists: [],
          isArchived: false
        },
        {
          id: v4(),
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
      ]
    }
  ]
}

export default {
  id: v4(),
  title: 'test boardddddddd',
  createdBy: { ...dummyMember1 },
  background: {
    color: '#0079bf',
    image: ''
  },
  members: [{ ...dummyMember1 }],
  labels: [{ ...label1 }, { ...label2 }, { ...label3 }, { ...label4 }, { ...label5 }, { ...label6 }, { ...label7 }],
  description: '',
  archive: [],
  lists: [{ ...dummyList1 }]
}
