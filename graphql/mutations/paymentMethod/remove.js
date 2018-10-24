import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

import {paymentMethodType} from '../../types/paymentMethod';
import PaymentMethodModel from '../../../models/paymentMethod';

export default {
	type: paymentMethodType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removedPaymentMethod = PaymentMethodModel.findByIdAndRemove(params.id).exec();
		if (!removedPaymentMethod) {
			throw new Error('Error removing payment method');
		}
		return removedPaymentMethod;
	}
};