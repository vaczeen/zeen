const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserPayment = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    paymentType:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
    cardNumber:{
        type:Number,
        required:true
    },
    cardHolder:{
        type:String,
        required:true
    },
    expire:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.model('UserPayment',UserPayment)