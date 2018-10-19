import {
    GraphQLList
} from 'graphql';

import {debtType} from '../../types/debt';
import DebtModel from '../../../models/debt';

export default {
    type: new GraphQLList(debtType),
    resolve() {
        const debts = DebtModel.find().exec();
        if (!debts) {
            throw new Error('Error while fetching debts..');
        }
        return debts;
    }
}