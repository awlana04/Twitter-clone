import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({});

server.listen().then(({ port }) => console.log(`🚀 Server started at port: ${port}!`));
