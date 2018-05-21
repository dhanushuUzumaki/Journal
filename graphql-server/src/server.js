import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import { ApolloEngine } from 'apollo-engine';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const {
  PRISMA_API_SECRET,
  PRISMA_HOST_PORT,
  PRISMA_SERVICE_NAME,
  GRAPHQL_SERVER_PORT,
  APOLLO_ENGINE_KEY
} = process.env;

const graphqlServerConfig = {
  tracing: true,
  cacheControl: true,
  cors: true
};

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

if (APOLLO_ENGINE_KEY) {
  const engine = new ApolloEngine({
    apiKey: APOLLO_ENGINE_KEY
  });

  const httpServer = server.createHttpServer(graphqlServerConfig);

  engine.listen({
    port: GRAPHQL_SERVER_PORT || 8080,
    httpServer,
    graphqlPaths: ['/']
  }, () => console.log(`Server with Apollo Engine is running on port ${GRAPHQL_SERVER_PORT}`));
} else {
  server.start(graphqlServerConfig, () => console.log(`Server is running on port ${GRAPHQL_SERVER_PORT}`));
}

export default server;
