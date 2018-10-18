import {
    GraphQLNonNull
} from 'graphql';

import { incomingType, incomingInputType } from '../../types/incoming';
import IncomingModel from '../../../models/incoming';

export default {
    type: incomingType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(incomingInputType)
        }
    },
    resolve(root, params) {
        const iModel = new IncomingModel(params.data);
        const newIncoming = iModel.save();
        if (!newIncoming) {
            throw new Error('Error adding incoming');
        }
        return newIncoming;
    }
}