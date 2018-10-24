import {
    GraphQLList
} from 'graphql';

import {paymentMethodType} from '../../types/paymentMethod';
import PaymentMethodModel from '../../../models/paymentMethod';

export default {
    type: new GraphQLList(paymentMethodType),
    resolve() {
        const paymentMethods = PaymentMethodModel.find().exec();
        if (!paymentMethods) {
            throw new Error('Error while fetching payment methods..');
        }
        return paymentMethods;
    }
}