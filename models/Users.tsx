
const mongoose = require('mongoose');


const UsersSchema = mongoose.Schema({
    userid : {
        type: String,
        unique: true,
        required: true,
    },
    name : {
        type: String,
        unique: true,
        required: true,
    },
    email : {
        type: String,
        unique: true,
        required: true,
    },
})
mongoose.models = {}
module.exports = mongoose.model('Users', UsersSchema);