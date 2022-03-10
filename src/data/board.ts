// import { dummyList1 } from './lists'
// import { dummyMember1 } from './members'
// import { label1, label2, label3, label4, label5, label6, label7 } from './labels'

export default {
  id: 'b100',
  title: 'Project tracking',
  createdBy: {
    id: 'u100',
    username: 'ArtiomB',
    fullname: 'Artiom bkt',
    image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
    starredIds: ['b100'],
    watchlist: ['t100', 'b100', 'g102']
  },
  background: {
    color: '#0079bf',
    image: ''
  },
  members: [
    {
      id: 'u100',
      username: 'ArtiomB',
      fullname: 'Artiom bkt',
      image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
      starredIds: ['b100'],
      watchList: ['t100', 'b100', 'g102']
    }
  ],
  labels: [
    {
      id: 'l101',
      title: 'done',
      color: 'green'
    },
    {
      id: 'l102',
      title: 'attention',
      color: 'yellow'
    },
    {
      id: 'l103',
      title: 'urgent',
      color: 'orange'
    },
    {
      id: 'l104',
      title: 'bug',
      color: 'red'
    },
    {
      id: 'l105',
      title: '',
      color: 'purple'
    },
    {
      id: 'l106',
      title: '',
      color: 'blue'
    },
    {
      id: 'l107',
      title: 'idea',
      color: 'navy'
    }
  ],
  description: '',
  archive: [],
  lists: [
    {
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
  ]
}
// {
//   id: 'g102',
//   title: 'Current sprint',
//   tasks: [
//     {
//       id: 't105',
//       title: 'Task view route',
//       description: '',
//       style: {
//         background: 'yellow',
//         fullCover: false
//       },
//       members: [
//         {
//           id: 'u100',
//           username: 'ArtiomB',
//           fullname: 'Artiom bkt',
//           image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
//           starredBoardsIds: [],
//           watchList: []
//         }
//       ],
//       labels: [],
//       startDate: 1242101225068,
//       dueDate: null,
//       dueComplete: false,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     },
//     {
//       id: 'bRlR4CfyPR',
//       title: 'Side menu',
//       description: '',
//       style: {
//         background: 'red',
//         fullCover: true
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l102',
//           title: 'attention',
//           color: 'yellow'
//         },
//         {
//           id: 'l103',
//           title: 'urgent',
//           color: 'orange'
//         }
//       ],
//       startDate: null,
//       dueDate: null,
//       dueComplete: false,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     },
//     {
//       id: 't103',
//       title: 'Edit dates on tasks',
//       description: '',
//       style: {
//         background: '',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l102',
//           title: 'attention',
//           color: 'yellow'
//         },
//         {
//           id: 'l103',
//           title: 'urgent',
//           color: 'orange'
//         }
//       ],
//       startDate: null,
//       dueDate: 1945959831361,
//       dueComplete: true,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     },
//     {
//       id: 'cCb6dEat1y',
//       title: 'Task & list archive',
//       description: '',
//       style: {
//         background: '',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l102',
//           title: 'attention',
//           color: 'yellow'
//         },
//         {
//           id: 'l105',
//           title: '',
//           color: 'purple'
//         }
//       ],
//       startDate: null,
//       dueDate: null,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     }
//   ]
// },
// {
//   id: 'g103',
//   title: 'Ideas',
//   tasks: [
//     {
//       id: 'FicqlKszNO',
//       title: 'More board view. Board, calendar, dashboard, timeline, map',
//       description: '',
//       style: {
//         background: 'cyan',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l107',
//           title: 'idea',
//           color: 'navy'
//         }
//       ],
//       startDate: null,
//       dueDate: null,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     },
//     {
//       id: 'aUFQMw3EJj',
//       title: "User subscription to specific task or whole board's notifications",
//       description: '',
//       style: {
//         background: 'cyan',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l107',
//           title: 'idea',
//           color: 'navy'
//         }
//       ],
//       startDate: null,
//       dueDate: null,
//       dueComplete: false,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     },
//     {
//       id: 'w8H2UbWfSX',
//       title: 'Filter tasks',
//       description: '',
//       style: {
//         background: 'cyan',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l107',
//           title: 'idea',
//           color: 'navy'
//         }
//       ],
//       startDate: null,
//       dueDate: null,
//       dueComplete: false,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     }
//   ]
// },
// {
//   id: 'g101',
//   title: 'Done',
//   tasks: [
//     {
//       id: 't104',
//       title: "Edit task's cover\n",
//       description: 'task two description',
//       style: {
//         background: '',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l101',
//           title: 'done',
//           color: 'green'
//         }
//       ],
//       startDate: 1642101255068,
//       dueDate: 1642101255069,
//       dueComplete: true,
//       comments: [
//         {
//           id: 'c100',
//           byMemberId: 'u100',
//           text: 'comment test'
//         }
//       ],
//       checklists: [
//         {
//           id: 'check100',
//           title: 'checklist one',
//           items: [
//             {
//               id: 'todo100',
//               title: 'todo one',
//               done: false
//             },
//             {
//               id: 'todo101',
//               title: 'todo two',
//               done: true
//             }
//           ]
//         }
//       ],
//       isArchived: false
//     },
//     {
//       id: 't109',
//       title: "Edit task's labels",
//       description: '',
//       style: {
//         background: '',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l101',
//           title: 'done',
//           color: 'green'
//         }
//       ],
//       startDate: 1646061915290,
//       dueDate: 1646061915290,
//       dueComplete: true,
//       comments: [],
//       checklists: [],
//       isArchived: false
//     },
//     {
//       id: 't110',
//       title: "Edit board's title",
//       description: 'task two description',
//       style: {
//         background: '',
//         fullCover: false
//       },
//       members: [],
//       labels: [
//         {
//           id: 'l101',
//           title: 'done',
//           color: 'green'
//         }
//       ],
//       startDate: 1642101255068,
//       dueDate: null,
//       dueComplete: true,
//       comments: [
//         {
//           id: 'c100',
//           byMemberId: 'u100',
//           text: 'comment test'
//         }
//       ],
//       checklists: [
//         {
//           id: 'check100',
//           title: 'checklist one',
//           items: [
//             {
//               id: 'todo100',
//               title: 'todo one',
//               done: false
//             },
//             {
//               id: 'todo101',
//               title: 'todo two',
//               done: true
//             }
//           ]
//         }
//       ],
//       isArchived: false
//     }
//   ]
// }
