import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const paymentMethodSchema = new Schema({
    ref: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    paymentMethodTypeId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {collection: 'paymentMethod', timestamp: true});

export default mongoose.model('paymentMethod', paymentMethodSchema);