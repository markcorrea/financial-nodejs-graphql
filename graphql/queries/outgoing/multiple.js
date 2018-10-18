import {
    GraphQLList
} from 'graphql';

import {outgoingType} from '../../types/outgoing';
import OutgoingModel from '../../../models/outgoing';

export default {
    type: new GraphQLList(outgoingType),
    resolve() {
        const outgoings = OutgoingModel.find().exec();
        if (!outgoings) {
            throw new Error('Error while fetching outgoings..');
        }
        return outgoings;
    }
}