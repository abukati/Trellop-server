import { dummyTask1, dummyTask2, dummyTask3, dummyTask4, dummyTask5, dummyTask6 } from './tasks'

export const dummyList1 = {
  id: 'g100',
  title: 'Backlog',
  tasks: [
    {
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
      comments: [{ id: 'com101', byMemberId: 'u100', text: 'GraphQL is amazing!' }],
      checklists: [],
      isArchived: false
    },
    {
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
    },
    {
      id: 't101',
      title: "Some forms don't behave as expected",
      description: 'task two description',
      style: {
        background: 'blue',
        fullCover: true
      },
      members: [],
      labels: [
        { id: 'l103', title: 'urgent', color: 'orange' },
        {
          id: 'l104',
          title: 'bug',
          color: 'red'
        }
      ],
      startDate: '1545959831361',
      dueDate: null,
      dueComplete: false,
      comments: [{ id: 'c100', byMemberId: 'u100', text: 'MikrORM rocks!' }],
      checklists: [
        {
          id: 'check100',
          title: 'checklist one',
          items: [
            { id: 'todo100', title: 'todo one', done: false },

            {
              id: 'todo101',
              title: 'todo two',
              done: true
            }
          ],
          isArchived: false
        },
        {
          id: '8v4846hxDN',
          title: 'Users should be able to upload their own images as covers besides Unsplash',
          description: "This is a descriptive description for a task in a board that's going to be seeded",
          style: {
            background: '',
            fullCover: false
          },
          members: [],
          labels: [
            { id: 'l106', title: '', color: 'blue' },
            {
              id: 'l107',
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
          id: 'WGeTBAh2hg',
          title: 'Web sockets optimization required',
          description: '',
          style: {
            background: 'red',
            fullCover: false
          },
          members: [
            {
              id: 'u100',
              username: 'ArtiomB',
              fullname: 'Artiom bkt',
              image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
              starredIds: ['b100'],
              watchlist: ['t100', 'b100', 'g102']
            }
          ],
          labels: [
            { id: 'l102', title: 'attention', color: 'yellow' },
            {
              id: 'l103',
              title: 'urgent',
              color: 'orange'
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
      ]
    }
  ]
}
