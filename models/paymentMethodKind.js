import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const paymentMethodKindSchema = new Schema({
    ref: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {collection: 'paymentMethodKind', timestamp: true});

export default mongoose.model('paymentMethodKind', paymentMethodKindSchema);