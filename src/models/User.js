const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,//'test' ' test'  'test '
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    menus: {
        type: [],
    }
})

module.exports = User = mongoose.model('user', UserSchema);