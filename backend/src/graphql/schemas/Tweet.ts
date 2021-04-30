import { objectType } from 'nexus';

import { Context } from '../../context';

export const Tweet = objectType({
  name: "Tweet",
  definition(t) {
    t.nonNull.string('id'),
      t.nonNull.string('content'),
      t.field('author', {
        type: 'User',
        resolve: (parent, _, context: Context) => {
          return context.prisma.tweet
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .author()
        },
      })
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
  }
})
