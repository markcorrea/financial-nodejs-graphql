import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {paymentMethodType, paymentMethodInputType} from '../../types/paymentMethod';
import {PaymentMethodModel} from '../../../models/paymentMethod';

export default {
    type: paymentMethodType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            name: 'data',
            type: new GraphQLNonNull(paymentMethodInputType)
        }
    },
    resolve(root, params) {
        return PaymentMethodModel.findByIdAndUpdate(params.id, {$set: {...params.data}})
        .then(data => PaymentMethodModel.findById(data.id).exec())
        .catch(err => new Error('Couldn\'t update payment method data. ', err));
    }
}