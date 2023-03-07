const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
    paymentDetail:{
       orderId:{
        type:Schema.Types.ObjectId,
        ref:'Order',
        require:true
       },
       amount:Number,
       provider:String,
       status:String 
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Payment',PaymentSchema)