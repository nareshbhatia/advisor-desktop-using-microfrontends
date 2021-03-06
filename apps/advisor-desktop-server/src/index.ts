import { readFileSync } from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { dataSources } from './datasources';
import { resolvers } from './resolvers';

const port = parseInt(process.env.API_PORT || '8080', 10);

async function startApolloServer() {
  // read the schema (convert the file Buffer to a UTF-8 string)
  const typeDefs = readFileSync(
    path.join(__dirname, './schema.graphql')
  ).toString('utf-8');

  // start apollo server
  const server = new ApolloServer({ typeDefs, resolvers, dataSources });
  const { url } = await server.listen({ port });

  console.log(`Advisor Desktop Server ready at ${url}`);
}

startApolloServer();
