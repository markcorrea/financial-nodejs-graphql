import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

import { movementType } from '../../types/movement';
import MovementModel from '../../../models/incoming';

export default {
	type: movementType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removedMovement = MovementModel.findByIdAndRemove(params.id).exec();
		if (!removedMovement) {
			throw new Error('Error removing movement');
		}
		return removedMovement;
	}
};