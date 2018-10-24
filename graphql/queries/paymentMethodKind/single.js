import {
	GraphQLID,
	GraphQLNonNull
} from 'graphql';

import {paymentMethodKindType} from '../../types/paymentMethodKind';
import PaymentMethodKindModel from '../../../models/paymentMethodKind';

export default {
	type: paymentMethodKindType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return PaymentMethodKindModel.findByID(params.id).exec();
	}
};