import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {movementType, movementInputType} from '../../types/movement';
import MovementModel from '../../../models/movement';

export default {
    type: movementType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            name: 'data',
            type: new GraphQLNonNull(movementInputType)
        }
    },
    resolve(root, params) {
        return MovementModel.findByIdAndUpdate(params.id, {$set: {...params.data}})
        .then(data => MovementModel.findById(data.id).exec())
        .catch(err => new Error('Couldn\'nt update movement data. ', err));
    }
}