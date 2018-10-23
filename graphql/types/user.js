import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} from 'graphql';

export const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }, 
        ref: {
            type: GraphQLString
        },
        login: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    })
});

export const userInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'Insert User',
    fields: () => ({
        ref: {
            type: GraphQLString
        },
        login: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type:  GraphQLString
        },
        password: {
            type:  GraphQLString
        }
    })
});