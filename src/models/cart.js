const mongoose = require('mongoose')
const { schema } = require('./user')
const Schema = mongoose.Schema

const CartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Cart', CartSchema)