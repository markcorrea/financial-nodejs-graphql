import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

import {debtType, debtInputType} from '../../types/debt';
import DebtModel from '../../../models/debt';

export default {
	type: debtType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(debtInputType)
		}
	},
	resolve(root, params) {
		return DebtModel.findByIdAndUpdate(params.id, {$set: {...params.data}})
			.then(data => DebtModel.findById(data.id).exec())
			.catch(err => new Error('Couldn\'t update debt data. ', err));
	}
};