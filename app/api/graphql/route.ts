import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const server = startServerAndCreateNextHandler(apolloServer);

export { server as POST };
