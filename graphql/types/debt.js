import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLFloat
} from 'graphql';

export const debtType = new GraphQLObjectType({
	name: 'Debt',
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
		expiresAt: {
			type: GraphQLFloat
		},
		value: {
			type: GraphQLFloat
		},
		movementId: {
			type: GraphQLString
		}
	})
});

export const debtInputType = new GraphQLInputObjectType({
	name: 'DebtInput',
	description: 'Insert Incoming',
	fields: () => ({
		ref: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		expiresAt: {
			type: GraphQLFloat
		},
		value: {
			type: GraphQLFloat
		},
		movementId: {
			type: GraphQLString
		}
	})
});
    