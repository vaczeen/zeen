const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderDetailSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentId: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentDetail',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('OrderDetail', OrderDetailSchema)