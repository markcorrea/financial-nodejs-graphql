import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLFloat
} from 'graphql';

export const incomingType = new GraphQLObjectType({
  name: 'Incoming',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    ref: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    receivedAt: {
      type: GraphQLFloat
    },
    value: {
      type: GraphQLFloat
    },
    mid: {
      type: GraphQLString
    }
  })
});

export const incomingInputType = new GraphQLInputObjectType({
  name: 'IncomingInput',
  description: 'Insert Incoming',
  fields: () => ({
    ref: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    receivedAt: {
      type: GraphQLFloat
    },
    value: {
      type: GraphQLFloat
    },
    mid: {
      type: GraphQLString
    }
  })
});