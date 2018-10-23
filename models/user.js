import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    ref: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: 'user', timestamp: true});

export default mongoose.model('user', userSchema);