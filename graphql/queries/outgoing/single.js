import {
	GraphQLID,
	GraphQLNonNull
} from 'graphql';

import {outgoingType} from '../../types/outgoing';
import OutgoingModel from '../../../models/outgoing';

export default {
	type: outgoingType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return OutgoingModel.findById(params.id).exec();
	}
};