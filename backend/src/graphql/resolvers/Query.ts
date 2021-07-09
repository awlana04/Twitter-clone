import { intArg, nonNull, objectType, stringArg, arg } from 'nexus';

import { Context } from '../../context';
import { getUserId } from '../../utils/getUserId';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nullable.field('me', {
      type: 'User',
      resolve: (_parent, _args, context: Context) => {
        const userId = getUserId(context);

        return context.prisma.user.findUnique({
          where: {
            id: String(userId),
          },
        })
      },
    })

    t.nonNull.list.nonNull.field('allUsers', {
      type: 'User',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.user.findMany();
      },
    })

    t.nonNull.list.nonNull.field('tweets', {
      type: 'Tweet',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.tweet.findMany();
      },
    })

    t.field('tweet', {
      type: 'Tweet',
      args: {
        id: stringArg()
      },
      resolve: (_parent, { id }, context) => {
        return context.prisma.tweet.findUnique({
          where: {
            id: String(id)
          }
        })
      }
    })
    // t.nullable.field('postById', {
    //   type: 'Post',
    //   args: {
    //     id: intArg(),
    //   },
    //   resolve: (_parent, args, context: Context) => {
    //     return context.prisma.post.findUnique({
    //       where: { id: args.id || undefined },
    //     })
    //   },
    // })

    // t.nonNull.list.nonNull.field('feed', {
    //   type: 'Post',
    //   args: {
    //     searchString: stringArg(),
    //     skip: intArg(),
    //     take: intArg(),
    //     orderBy: arg({
    //       type: 'PostOrderByUpdatedAtInput',
    //     }),
    //   },
    //   resolve: (_parent, args, context: Context) => {
    //     const or = args.searchString
    //       ? {
    //         OR: [
    //           { title: { contains: args.searchString } },
    //           { content: { contains: args.searchString } },
    //         ],
    //       }
    //       : {}

    //     return context.prisma.post.findMany({
    //       where: {
    //         published: true,
    //         ...or,
    //       },
    //       take: args.take || undefined,
    //       skip: args.skip || undefined,
    //       orderBy: args.orderBy || undefined,
    //     })
    //   },
    // })
  },
});
