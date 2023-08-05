import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const server = startServerAndCreateNextHandler(apolloServer);

export { server as POST };
