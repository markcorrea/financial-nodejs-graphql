import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const outgoingSchema = new Schema({
    ref: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    paidAt: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    did: {
        type: String
    },
    mid: {
        type: String,
        required: true
    },
    pmid: {
        type: String,
        required: true
    }
}, {collection: 'outgoing', timestamp: true});

export default mongoose.model('outgoing', outgoingSchema);