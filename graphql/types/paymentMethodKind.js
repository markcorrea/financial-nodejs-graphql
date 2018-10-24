import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';

export const paymentMethodKindType = new GraphQLObjectType({
	name: 'PaymentMethodKind',
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		ref: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		}
	})
});

export const paymentMethodKindInputType = new GraphQLInputObjectType({
	name: 'PaymentMethodKindInput',
	description: 'Insert Payment Method Kind',
	fields: () => ({
		ref: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		}
	})
});