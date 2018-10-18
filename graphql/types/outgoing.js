import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} from 'graphql';

export const outgoingType = new GraphQLObjectType({
    name: 'Outgoing',
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
        paidAt: {
            type: GraphQLID
        },
        value: {
            type: GraphQLFloat
        },
        did: {
            type: GraphQLString
        },
        mid: {
            type: GraphQLString
        },
        pmid: {
            type: GraphQLString
        }
    })
});

export const outgoingInputType = new GraphQLInputObjectType({
    name: 'OutgoingInput',
    description: 'Insert Outgoing',
    fields: () => ({
        ref: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        paidAt: {
            type: GraphQLID
        },
        value: {
            type: GraphQLFloat
        },
        did: {
            type: GraphQLString
        },
        mid: {
            type: GraphQLString
        },
        pmid: {
            type: GraphQLString
        }
    })
});