import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import {movementType} from '../../types/movement';
import MovementModel from '../../../models/movement';

export default {
    type: movementType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return MovementModel.findById(params.id).exec();
    }
}