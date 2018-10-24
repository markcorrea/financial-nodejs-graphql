import {
    GraphQLNonNull
} from 'graphql';

import {paymentMethodKindType, paymentMethodKindInputType} from '../../types/paymentMethodKind';
import PaymentMethodKindModel from '../../../models/paymentMethodKind';

export default {
    type: paymentMethodKindType,
    args: {
        data: {
            name: 'data',
            type:  new GraphQLNonNull(paymentMethodKindInputType)
        }
    },
    resolve(root, params) {
        const pModel = new PaymentMethodKindModel(params.data);
        const newPaymentMethodKind = pModel.save();
        if (!newPaymentMethodKind) {
            throw new Error('Error adding payment method kind');
        }
        return newPaymentMethodKind;
    }
}