const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,//'test' ' test'  'test '
        require: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number
    }
})

module.exports = Product = mongoose.model('product', ProductSchema);