import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {paymentMethodKindType, paymentMethodKindInputType} from '../../types/paymentMethodKind';
import PaymentMethodKindModel from '../../../models/paymentMethodKind';

export default {
    type: paymentMethodKindType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            name: 'data',
            type: new GraphQLNonNull(paymentMethodKindInputType)
        }
    },
    resolve(root, params) {
        return PaymentMethodKindModel.findByIdAndUpdate(params.id, {$set: {...params.data}})
        .then(data => PaymentMethodKindModel.findById(data.id).exec())
        .catch(err => new Error('Couldn\'t update payment method kind data. ', err));
    }
}