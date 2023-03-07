const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentDetailSchema = new Schema({
       orderId:{
        type:Schema.Types.ObjectId,
        ref:'OrderDetail',
        require:true
       },
       amount:Number,
       provider:String,
       status:String 
},{
    timestamps:true
})


module.exports = mongoose.model('PaymentDetail',PaymentDetailSchema)