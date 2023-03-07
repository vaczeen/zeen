const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    address1:String,
    address2:String,
    phoneNumber:Number,
    city:String,
    postalCode:String,
    country:String
})

module.exports = mongoose.Schema('Address',AddressSchema)