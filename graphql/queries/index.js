import incomingQuery from './incoming';
import outgoingQuery from './outgoing';
import debtQuery from './debt';
import movementQuery from './movement';
import userQuery from './user';

export default {
    ...incomingQuery,
    ...outgoingQuery,
    ...debtQuery,
    ...movementQuery,
    ...userQuery
};