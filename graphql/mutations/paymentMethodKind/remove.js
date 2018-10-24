import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {paymentMethodKindType} from '../../types/paymentMethodKind';
import PaymentMethodKindModel from '../../../models/paymentMethodKind';

export default {
    type: paymentMethodKindType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedPaymentMethodKind = PaymentMethodKindModel.findByIdAndRemove(params.id).exec();
        if (!removedPaymentMethodKind) {
            throw new Error('Error removing payment method kind');
        }
        return removedPaymentMethodKind;
    }
}