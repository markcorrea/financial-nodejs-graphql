import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const movementSchema = new Schema({
    ref: {
        type: String,
        required: true
    },
    startedAt: {
        type: String,
        required: true
    },
    finishedAt: {
        type: String
    },
    uid: {
        type: String,
        required: true
    }
}, {collection: 'movement', timestamps: true});

export default mongoose.model('movement', movementSchema);