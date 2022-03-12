import { v4 } from 'uuid'
import { dummyTask5 } from './tasks'

export const dummyMember1: any = {
  id: v4(),
  username: 'ArtiomB',
  fullname: 'Artiom bkt',
  image: 'https://en.meming.world/images/en/b/b9/Cursed_Cat.jpg',
  boardsMembership: [],
  taskMembership: [dummyTask5.id]
  // starredIds: ['b100'],
  // watchlist: ['t100', 'b100', 'g102']
}
