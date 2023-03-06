const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    product: {
        id: Number,
        name: String,
        description: String,
        price: Number,
        quantity: Number,
        category: {
            id: Number,
            cg_name: String,
            description: String
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)