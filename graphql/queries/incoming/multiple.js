import {
    GraphQLList
} from 'graphql';

import {incomingType} from '../../types/incoming';
import IncomingModel from '../../../models/incoming';

export default {
    type: new GraphQLList(incomingType),
    resolve() {
        const incomings = IncomingModel.find().exec();
        if (!incomings) {
            throw new Error('Error while fetching incomings..');
        }
        return incomings;
    }
}