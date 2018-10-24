import {
	GraphQLID,
	GraphQLNonNull
} from 'graphql';

import {incomingType} from '../../types/incoming';
import IncomingModel from '../../../models/incoming';

export default {
	type: incomingType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return IncomingModel.findById(params.id).exec();
	}
};