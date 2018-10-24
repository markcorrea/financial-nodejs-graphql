import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

import { incomingType } from '../../types/incoming';
import IncomingModel from '../../../models/incoming';

export default {
	type: incomingType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removedIncoming = IncomingModel.findByIdAndRemove(params.id).exec();
		if (!removedIncoming) {
			throw new Error('Error removing incoming');
		}
		return removedIncoming;
	}
};