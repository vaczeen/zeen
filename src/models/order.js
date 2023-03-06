const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    orderDetail: {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        paymentId:{
            type:Schema.Types.ObjectId,
            ref:'paymentDetail',
            require:true
        }
    },
    paymentDetail: {
        orderId: {
            type: Schema.Types.ObjectId,
            ref: 'orderDetail',
            require: true
        },
        amount: Number,
        provider: String,
        status: String
    },
    orderItem: {
        orderId: {
            type: Schema.Types.ObjectId,
            ref: 'orderDetail',
            require: true
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            reqiure: true
        },
        quantity: Number,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema)