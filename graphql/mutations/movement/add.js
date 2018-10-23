import {
    GraphQLNonNull
} from 'graphql';

import {movementType, movementInputType} from '../../types/movement';
import MovementModel from '../../../models/movement';

export default {
    type: movementType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(movementInputType)
        }
    },
    resolve(root, params) {
        const mModel = new MovementModel(params.data);
        const newMovement = mModel.save();
        if (!newMovement) {
            throw new Error('Error adding movement');
        }
        return newMovement;
    }
}