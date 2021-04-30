import { makeSchema, asNexusMethod, connectionPlugin } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { applyMiddleware } from 'graphql-middleware';
import { DateTimeResolver } from 'graphql-scalars';

import { permissions } from '../utils/Permissions';

import { User } from './schemas/User';
import { Tweet } from './schemas/Tweet';

import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { AuthPayload } from './resolvers/AuthPayload';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const schemaWithoutPermissions = makeSchema({
  types: [
    Query,
    Mutation,
    User,
    Tweet,
    AuthPayload,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '../../../schema.graphql',
    typegen: __dirname + '../../../generated/nexus.ts',
  },
  plugins: [nexusPrisma({ experimentalCRUD: true }), connectionPlugin()],
  contextType: {
    module: require.resolve('../context'),
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
