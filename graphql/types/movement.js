import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} from 'graphql';

export const movementType = new GraphQLObjectType({
    name: 'Movement',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        ref: {
            type: GraphQLString
        },
        startedAt: {
            type: GraphQLFloat
        },
        finishedAt: {
            type: GraphQLFloat
        },
        uid: {
            type: GraphQLString
        }
    })
});

export const movementInputType = new GraphQLInputObjectType({
    name: 'MovementInput',
    description: 'Insert Movement',
    fields: () => ({
        ref: {
            type: GraphQLString
        },
        startedAt: {
            type: GraphQLFloat
        },
        finishedAt: {
            type: GraphQLFloat
        },
        uid: {
            type: GraphQLString
        }
    })
});