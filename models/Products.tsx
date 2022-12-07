
const mongoose = require('mongoose');


const ProductsSchema = mongoose.Schema({
    id : {
        type: Number,
        unique: true,
        required: true,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    image:{
        type: String,
    }
})
mongoose.models = {}
module.exports = mongoose.model('Products', ProductsSchema);