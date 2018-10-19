import {
    GraphQLNonNull
} from 'graphql';

import { debtType, debtInputType } from '../../types/debt';
import DebtModel from '../../../models/debt';

export default {
    type: debtType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(debtInputType)
        }
    },
    resolve(root, params) {
        const dModel = new DebtModel(params.data);
        const newDebt = dModel.save();
        if (!newDebt) {
            throw new Error('Error adding debt');
        }
        return newDebt;
    }
}