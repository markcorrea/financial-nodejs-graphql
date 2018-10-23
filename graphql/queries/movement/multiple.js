import {
    GraphQLList
} from 'graphql';

import {movementType} from '../../types/movement';
import MovementModel from '../../../models/movement';

export default {
    type: new GraphQLList(movementType),
    resolve() {
        const movements = MovementModel.find().exec();
        if (!movements) {
            throw new Error('Error shile fetching movements..');
        }
        return movements;
    }
}