import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import {debtType} from '../../types/debt';
import DebtModel from '../../../models/debt';

export default {
    type: debtType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return DebtModel.findById(params.id).exec();
    }
}