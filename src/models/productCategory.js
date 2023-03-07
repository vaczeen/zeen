const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    category:{
        name:String,
        description:String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('pCategory',CategorySchema)