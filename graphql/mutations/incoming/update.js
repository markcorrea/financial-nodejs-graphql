import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

import { incomingType, incomingInputType } from '../../types/incoming';
import IncomingModel from '../../../models/incoming';

export default {
	type: incomingType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(incomingInputType)
		}
	},
	resolve(root, params) {
		return IncomingModel.findByIdAndUpdate(params.id, {$set: { ...params.data}})
			.then(data => IncomingModel.findById(data.id).exec())
			.catch(err => new Error('Couldn\'t update incoming data. ', err));
	}
};