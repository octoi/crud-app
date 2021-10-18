import { GraphQLObjectType, GraphQLSchema } from 'graphql';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({}),
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => ({}),
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
