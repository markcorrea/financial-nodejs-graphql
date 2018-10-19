import incomingQuery from './incoming';
import outgoingQuery from './outgoing';
import debtQuery from './debt';

export default {
    ...incomingQuery,
    ...outgoingQuery,
    ...debtQuery
};