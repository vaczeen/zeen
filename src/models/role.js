const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
    roleName: {
        id: Number,
        roleName: String
    },
    permissions: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
})

module.exports = mongoose.model('Role', RoleSchema)