import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000', // 替换为你的 GraphQL 服务端地址
  }),
  cache: new InMemoryCache(),
});

export default client;