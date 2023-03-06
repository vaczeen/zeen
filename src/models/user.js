const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

const UserSchema = Schema({
    email: {
        type: String,
        lowercase:true,
        require: [true,"email can't be blank"],
        match:[/\S+@\S\.\S+/ ,'email is in invalid'],
        unique: true, 
        index:true
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
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' })



module.exports = mongoose.model('User', UserSchema)