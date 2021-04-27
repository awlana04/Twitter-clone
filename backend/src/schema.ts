import { makeSchema, asNexusMethod } from 'nexus';
import { applyMiddleware } from 'graphql-middleware';
import { DateTimeResolver } from 'graphql-scalars';

import { permissions } from './permissions';

import { User } from './types/User';
import { UserUniqueInput } from './types/UserUniqueInput';
import { UserCreateInput } from './types/UserCreateInput';
import { Post } from './types/Post';
import { PostOrderByUpdatedAtInput } from './types/PostOrderByUpdatedAtInput';
import { PostCreateInput } from './types/PostCreateInput';
import { Query } from './types/Query';
import { Mutation } from './types/Mutation';
import { SortOrder } from './types/SortOrder';
import { AuthPayload } from './types/AuthPayload';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const schemaWithoutPermissions = makeSchema({
  types: [
    Query,
    Mutation,
    Post,
    User,
    AuthPayload,
    UserUniqueInput,
    UserCreateInput,
    PostCreateInput,
    SortOrder,
    PostOrderByUpdatedAtInput,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '../../schema.graphql',
    typegen: __dirname + '../../generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

export const schema = applyMiddleware(schemaWithoutPermissions, permissions);
