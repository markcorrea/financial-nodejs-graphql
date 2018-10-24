import {
	GraphQLNonNull
} from 'graphql';

import {paymentMethodType, paymentMethodInputType} from '../../types/paymentMethod';
import PaymentMethodModel from '../../../models/paymentMethod';

export default {
	type: paymentMethodType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(paymentMethodInputType)
		}
	},
	resolve(root, params) {
		const pModel = new PaymentMethodModel(params.data);
		const newPaymentMethod = pModel.save();
		if (!newPaymentMethod) {
			throw new Error('Error adding payment method');
		}
		return newPaymentMethod;
	}
};