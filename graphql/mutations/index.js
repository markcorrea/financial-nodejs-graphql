import incomingMutation from './incoming';
import outgoingMutation from './outgoing';
import debtMutation from './debt';

export default {
    ...incomingMutation,
    ...outgoingMutation,
    ...debtMutation
}