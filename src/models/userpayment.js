const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserPayment = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    paymentType:{
        type:String,
        require:true
    },
    provider:{
        type:String,
        require:true
    },
    cardNumber:{
        type:Number,
        require:true
    },
    cardHolder:{
        type:String,
        require:true
    },
    expire:{
        type:Date,
        require:true
    }
})

module.exports = mongoose.model('UserPayment',UserPayment)