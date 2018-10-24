import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const debtSchema = new Schema({
	ref: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	expiresAt: {
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
}, {collection: 'debt', timestamp: true});

export default mongoose.model('debt', debtSchema);