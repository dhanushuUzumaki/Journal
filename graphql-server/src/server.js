import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const {
  PRISMA_API_SECRET,
  PRISMA_HOST_PORT,
  PRISMA_SERVICE_NAME,
  GRAPHQL_SERVER_PORT
} = process.env;

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './src/generated/prisma.graphql',
      endpoint: `http://${PRISMA_SERVICE_NAME}:${PRISMA_HOST_PORT}`,
      secret: PRISMA_API_SECRET,
      debug: true,
    })
  })
});

server.start({ port: GRAPHQL_SERVER_PORT, cors: true }, () => console.log(`Server is running on port ${GRAPHQL_SERVER_PORT}`));

export default server;
