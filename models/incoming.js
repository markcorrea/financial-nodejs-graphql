import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const incomingSchema = new Schema({
	ref: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	receivedAt: {
		type: Number,
		required: true
	},
	value: {
		type: Number,
		required: true
	},
	movementId: {
		type: String,
		required: true
	}
}, {collection: 'incoming', timestamp: true});

export default mongoose.model('incoming', incomingSchema);