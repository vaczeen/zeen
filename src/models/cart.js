const mongoose = require('mongoose')
const { schema } = require('./user')
const Schema = mongoose.Schema

const CartSchema = new Schema({
    cart: {
        id: Number,
        quantity: Number
    },
    product: {
        type: Schema.ObjectId,
        ref:'Product',
        require:true        
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Cart',CartSchema)