const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema({
    email: {
        type: String,
        lowercase: true,
        require: [true, "email can't be blank"],
        match: [/^\S+@\S+\.\S+$/, 'email is in invalid'],
        unique: true,
        index: true
    },
    password: {
        type: String,
        require: true
    },
    address: {
        address1: String,
        address2: String,
        city: String,
        postalcode: String,
        country: String
    },
    payment: {
        paymentType: String,
        provider: String,
        cardNumber: Number,
        cardHolder: String,
        expire: Date
    },
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    isActive: {
        type: Boolean,
        defult: true
    }
}, {
    timestamps: true

})



module.exports = mongoose.model('User', UserSchema)