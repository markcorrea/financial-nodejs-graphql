import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {outgoingType} from '../../types/outgoing';
import OutgoingModel from '../../../models/outgoing';

export default {
    type: outgoingType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedOutgoing = OutgoingModel.findByIdAndRemove(params.id).exec();
        if (!removedOutgoing) {
            throw new Error('Error removing outgoing');
        }
        return removedOutgoing;
    }
}