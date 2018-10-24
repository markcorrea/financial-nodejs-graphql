import {
	GraphQLList
} from 'graphql';

import {paymentMethodKindType} from '../../types/paymentMethodKind';
import PaymentMethodKindModel from '../../../models/paymentMethodKind';

export default {
	type: new GraphQLList(paymentMethodKindType),
	resolve() {
		const paymentMethodKinds = PaymentMethodKindModel.find().exec();
		if (!paymentMethodKinds) {
			throw new Error('Error while fetching payment method kinds');
		}
		return paymentMethodKinds;
	}
};