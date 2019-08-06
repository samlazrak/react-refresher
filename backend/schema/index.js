import { ApolloServer, gql } from 'apollo-server-express';
import { merge } from 'lodash';
import config from 'config';
import api from '../api';

const rootTypeDefs = gql`
  type Query {
    name: String
  }
  type Mutation {
    name: String
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

const rootResolvers = {
  Query: {
    name: () => 'App',
  },
  Mutation: {
    name: () => 'App',
  },
};

const resolvers = merge(rootResolvers);

const typeDefs = [rootTypeDefs];

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    console.log(error);
    return new Error('Internal server error');
  },
  playground: {
    endpoint: config.get('app.url') + '/graphql',
    settings: {
      'editor.theme': 'dark',
    },
  },
  context: async ({ req }) => {
    let token = null;
    let user = null;

    try {
      token = req.headers.authorization || '';

      if (token) {
        user = await api.user.token(token);
      }
    } catch (e) {
      console.warn(`Unable to authenticate using auth token: ${token}`);
    }

    return {
      user,
    };
  },
});

export default schema;
