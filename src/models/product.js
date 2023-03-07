const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    product: {
        name: String,
        description: String,
        price: Number,
        quantity: Number
    },
    category: {
        type:Schema.Types.ObjectId,
        ref:'pCategory',
        require:true
        }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)