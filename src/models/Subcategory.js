const mongoose = require('mongoose');


const SubcategorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,//'test' ' test'  'test '
        require: true
    },
    products: {
        type: []
    }
})

module.exports = Subcategory = mongoose.model('subcategory', SubcategorySchema);