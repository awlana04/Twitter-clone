import { makeSchema, asNexusMethod, connectionPlugin } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { applyMiddleware } from 'graphql-middleware';
import { DateTimeResolver } from 'graphql-scalars';

import { permissions } from '../config/permissions';

import { User } from './schemas/User';
import { Profile } from './schemas/Profile';
import { ImageUpload } from './schemas/ImageUpload';
import { Tweet } from './schemas/Tweet';

import { Upload } from './resolvers/Upload';

import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { AuthPayload } from './resolvers/AuthPayload';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const schemaWithoutPermissions = makeSchema({
  types: [
    User,
    Profile,
    ImageUpload,
    Upload,
    Tweet,
    Query,
    Mutation,
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
