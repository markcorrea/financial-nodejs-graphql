import {
	GraphQLNonNull
} from 'graphql';

import {outgoingType, outgoingInputType} from '../../types/outgoing';
import OutgoingModel from '../../../models/outgoing';

export default {
	type: outgoingType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(outgoingInputType)
		}
	},
	resolve(root, params) {
		const oModel = new OutgoingModel(params.data);
		const newOutgoing = oModel.save();
		if (!newOutgoing) {
			throw new Error('Error adding outgoing');
		}
		return newOutgoing;
	}
};