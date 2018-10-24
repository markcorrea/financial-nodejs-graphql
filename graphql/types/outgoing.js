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
			type: GraphQLFloat
		},
		value: {
			type: GraphQLFloat
		},
		debtId: {
			type: GraphQLString
		},
		movementId: {
			type: GraphQLString
		},
		paymentMethodId: {
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
			type: GraphQLFloat
		},
		value: {
			type: GraphQLFloat
		},
		debtId: {
			type: GraphQLString
		},
		movementId: {
			type: GraphQLString
		},
		paymentMethodId: {
			type: GraphQLString
		}
	})
});