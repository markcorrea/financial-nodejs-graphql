import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

import {outgoingType, outgoingInputType} from '../../types/outgoing';
import OutgoingModel from '../../../models/outgoing';

export default {
	type: outgoingType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(outgoingInputType)
		}
	},
	resolve(root, params) {
		return OutgoingModel.findByIdAndUpdate(params.id, {$set: {...params.data}})
			.then(data => OutgoingModel.findById(data.id).exec())
			.catch(err => new Error('Couldn\'t update outgoing data. ', err));
	}
};