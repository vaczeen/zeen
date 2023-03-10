const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    roleName: {
        roleName: String,
        required:true
    },
    permissions: {
        type: String,
        required: true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Role', RoleSchema)