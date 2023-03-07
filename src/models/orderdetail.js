const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderDetailSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    paymentId: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentDetail',
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('OrderDetail', OrderDetailSchema)