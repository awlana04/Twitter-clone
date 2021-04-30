import { ApolloServer } from 'apollo-server';

import { schema } from './graphql/index';
import { createContext } from './context';

export const server = new ApolloServer({ schema, context: createContext });

server.listen().then(({ port }) => console.log(`🚀 Server started at port: ${port}!`));
