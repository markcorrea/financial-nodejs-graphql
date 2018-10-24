import {
	GraphQLID,
	GraphQLNonNull
} from 'graphql';

import {paymentMethodType} from '../../types/paymentMethod';
import PaymentMethodModel from '../../../models/paymentMethod';

export default {
	type: paymentMethodType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return PaymentMethodModel.findById(params.id).exec();
	}
};