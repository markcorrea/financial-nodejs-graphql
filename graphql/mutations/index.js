import incomingMutation from './incoming';
import outgoingMutation from './outgoing';
import debtMutation from './debt';
import movementMutation from './movement';
import userMutation from './user';
import paymentMethodMutation from './paymentMethod';
import paymentMethodKindMutation from './paymentMethodKind';

export default {
	...incomingMutation,
	...outgoingMutation,
	...debtMutation,
	...movementMutation,
	...userMutation,
	...paymentMethodMutation,
	...paymentMethodKindMutation
};