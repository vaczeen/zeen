const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderItemSchema = new Schema({
    orderid:{
        type:Schema.Types.ObjectId,
        ref:'OrderDetail',
        required:true
    },
    productId:{
        type:Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:Number
},{
    timestamps:true
})

module.exports = mongoose.model('OrderItem',OrderItemSchema)