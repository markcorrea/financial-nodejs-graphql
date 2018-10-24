import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql';

import {debtType} from '../../types/debt';
import DebtModel from '../../../models/debt';

export default {
	type: debtType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removedDebt = DebtModel.findByIdAndRemove(params.id).exec();
		if (!removedDebt) {
			throw new Error('Error removing debt');
		}
		return removedDebt;
	}
};