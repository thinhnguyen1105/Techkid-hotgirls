const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    avatar: {
        type: String,
        default: 0 
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: {createdAt: "createdAt"}
});

module.exports = mongoose.model('users', userModel);