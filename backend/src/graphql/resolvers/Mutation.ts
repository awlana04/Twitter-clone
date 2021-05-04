import { nonNull, objectType, stringArg, arg } from 'nexus';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import fs from 'fs';

import { Context } from '../../context';
import { getUserId, APP_SECRET } from '../../utils/getUserId';

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
          token: sign({ userId: user.id }, APP_SECRET),
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
          token: sign({ userId: user.id }, APP_SECRET),
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
      resolve: (parent, { id, ...args }, context: Context) => {
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
        name: stringArg(),
        bio: stringArg(),
        location: stringArg(),
        website: stringArg(),
      },
      resolve: (parent, { id, ...args }, context: Context) => {
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

    t.field('uploadAvatar', {
      type: 'ImageUpload',
      args: {
        id: stringArg(),
        avatar: stringArg(),
      },
      resolve: (parent, { id, avatar, ...args }, context: Context) => {
        return context.prisma.imageUpload.create({
          data: {
            ...args,
          }
        })
      }
      // resolve: async (parent, { id, avatar, ...args }, context: Context) => {

      // const { createReadStream, filename, mimetype } = avatar;

      // const fileStream = createReadStream()

      // fileStream.pipe(fs.createWriteStream(`../../../tmp/${filename}`));
      // }
    });

    // t.field('incrementPostViewCount', {
    //   type: 'Post',
    //   args: {
    //     id: nonNull(intArg()),
    //   },
    //   resolve: (_, args, context: Context) => {
    //     return context.prisma.post.update({
    //       where: { id: args.id || undefined },
    //       data: {
    //         viewCount: {
    //           increment: 1,
    //         },
    //       },
    //     })
    //   },
    // })

    // t.field('deletePost', {
    //   type: 'Post',
    //   args: {
    //     id: nonNull(intArg()),
    //   },
    //   resolve: (_, args, context: Context) => {
    //     return context.prisma.post.delete({
    //       where: { id: args.id },
    //     })
    //   },
    // })
  },
})
