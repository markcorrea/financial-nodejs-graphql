import incomingMutation from './incoming';
import outgoingMutation from './outgoing';
import debtMutation from './debt';
import movementMutation from './movement';
import userMutation from './user';

export default {
    ...incomingMutation,
    ...outgoingMutation,
    ...debtMutation,
    ...movementMutation,
    ...userMutation
}