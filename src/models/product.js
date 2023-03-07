const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productName: {
        type: String,
        require: true
    },
    descripttion:{
        type:String,
        require:true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'pCategory',
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity:{
        type:Number,
        require:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)