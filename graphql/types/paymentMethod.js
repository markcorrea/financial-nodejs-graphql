import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';

export const paymentMethodType = new GraphQLObjectType({
	name: 'PaymentMethod',
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
		paymentMethodTypeId: {
			type: GraphQLString
		},
		userId: {
			type: GraphQLString
		}
	})
});

export const paymentMethodInputType = new GraphQLInputObjectType({
	name: 'PaymentMethodInput',
	description: 'Insert Payment Method',
	fields: () => ({
		ref: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		paymentMethodTypeId: {
			type: GraphQLString
		},
		userId: {
			type: GraphQLString
		}
	})
});