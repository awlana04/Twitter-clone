import { objectType } from 'nexus';

import { Context } from '../../context';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('email')
    t.nonNull.string('name', { description: 'Credentials' }),
      t.string('avatar'),
      t.string('bio'),
      t.string('location'),
      t.string('website'),
      t.nonNull.list.nonNull.field('tweets', {
        type: 'Tweet',
        resolve: (parent, _, context: Context) => {
          return context.prisma.user
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .posts()
        },
      })
  },
})
