import { ApolloServer } from 'apollo-server';

import { schema } from './schema';
import { createContext } from './context';

const server = new ApolloServer({ schema, context: createContext });

server.listen().then(({ port }) => console.log(`🚀 Server started at port: ${port}!`));
