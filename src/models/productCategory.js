const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    pName:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('pCategory',CategorySchema)