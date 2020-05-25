const mongoose = require('mongoose');


const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,//'test' ' test'  'test '
        require: true
    },
    portions: {
        type: [String],
    },
    products: {
        type: []
    },
    subcategories:{
        type:[]
    }
})

module.exports = Category = mongoose.model('category', CategorySchema);