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
    isVerifyEmail: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        require: true
    },
    firstName: String,
    lastName: String,
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        require: true,
    },
    phoneNumber: Number,
    isVerifyPhoneNo:{
        type:Boolean,
        default:false
    },    
    isActive: {
        type: Boolean,
        defult: true
    }
}, {
    timestamps: true

})



module.exports = mongoose.model('User', UserSchema)