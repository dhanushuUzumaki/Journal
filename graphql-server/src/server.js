import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import { ApolloEngine } from 'apollo-engine';
import morgan from 'morgan';
import logger from './lib/logger';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const {
  PRISMA_MANAGEMENT_API_SECRET,
  PRISMA_HOST_PORT,
  PRISMA_SERVICE_NAME,
  GRAPHQL_SERVER_PORT,
  APOLLO_ENGINE_KEY
} = process.env;

const port = GRAPHQL_SERVER_PORT || 8080;

const SERVER_CONFIG = {
  tracing: true,
  cacheControl: true,
  cors: true,
  debug: true
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
      secret: PRISMA_MANAGEMENT_API_SECRET
    })
  })
});

server.express.use(morgan('combined', { stream: logger.stream }));

if (APOLLO_ENGINE_KEY) {
  const engine = new ApolloEngine({
    apiKey: APOLLO_ENGINE_KEY
  });

  const httpServer = server.createHttpServer(SERVER_CONFIG);

  engine.listen({
    port,
    httpServer,
    graphqlPaths: ['/']
  }, () => logger.info(`Server with Apollo Engine is running on port ${port}`));
} else {
  server.start({ port, ...SERVER_CONFIG }, () => logger.info(`Server is running on port ${port}`));
}

export default server;
