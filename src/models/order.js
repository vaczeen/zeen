const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    orderDetail: {
        id: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    product: {
        type: Schema.ObjectId,
        ref: 'Product',
        reqiure: true
    },
    paymentDetail:{
        id:Number,
        amount:Number,
        provider:String,
        status:String
    },
    quantity:Number,
},{
    timestamps:true
})

module.exports = mongoose.model('Order', OrderSchema)