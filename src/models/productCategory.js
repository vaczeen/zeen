const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    pName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('pCategory',CategorySchema)