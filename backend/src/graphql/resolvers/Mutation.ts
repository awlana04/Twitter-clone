import { nonNull, nullable, objectType, stringArg } from 'nexus';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { Context } from '../../context';
import { getUserId } from '../../utils/getUserId';

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, args, context: Context) => {
        const hashedPassword = await hash(args.password, 10);

        const user = await context.prisma.user.create({
          data: {
            email: args.email,
            password: hashedPassword,
          },
        })

        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET as string),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, { email, password }, context: Context) => {
        const user = await context.prisma.user.findUnique({
          where: {
            email,
          },
        })

        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        const passwordValid = await compare(password, user.password);

        if (!passwordValid) {
          throw new Error('Invalid password');
        }

        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET as string),
          user,
        }
      },
    })

    t.field('createProfile', {
      type: 'Profile',
      args: {
        id: stringArg(),
        avatar: stringArg(),
        name: stringArg(),
        bio: stringArg(),
        location: stringArg(),
        website: stringArg(),
      },
      resolve: (_parent, { id, ...args }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.profile.create({
          data: {
            ...args,
            user: { connect: { id: String(userId) } }
          }
        })
      }
    })

    t.field('updateProfile', {
      type: 'Profile',
      args: {
        id: stringArg(),
        avatar: stringArg(),
        name: stringArg(),
        bio: stringArg(),
        location: stringArg(),
        website: stringArg(),
      },
      resolve: (_parent, { id, ...args }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.profile.update({
          data: {
            ...args,
          },
          where: {
            id: String(id),
          }
        })
      }
    })

    t.field('createTweet', {
      type: 'Tweet',
      args: {
        content: stringArg()
      },
      resolve: (_parent, { content }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.tweet.create({
          data: {
            content,
            author: { connect: { id: String(userId) } }
          }
        })
      }
    })

    t.field('likedTweet', {
      type: 'LikedTweet',
      args: {
        id: stringArg()
      },
      resolve: (_parent, { id }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.likedTweet.create({
          data: {
            tweet: { connect: { id: String(id) } },
            user: { connect: { id: String(userId) } }
          }
        })
      }
    })

    t.field('deleteLike', {
      type: 'LikedTweet',
      args: {
        id: stringArg()
      },
      resolve: (_parent, { id }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.likedTweet.delete({
          where: { id: String(id) }
        })
      }
    })

    t.field('createReply', {
      type: 'Reply',
      args: {
        id: stringArg(),
        content: stringArg(),
      },
      resolve: (_parent, { id, content }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.reply.create({
          data: {
            content,
            tweet: { connect: { id: String(id) } },
            user: { connect: { id: String(userId) } }
          }
        })
      }
    })
  },
})
