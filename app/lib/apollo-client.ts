// lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://monasaad.com/graphql', // WPGraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
