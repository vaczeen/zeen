const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    firstName: String,
    lastName: String
}, {
    timestamps: true

})

module.exports = mongoose.model('User', UserSchema)