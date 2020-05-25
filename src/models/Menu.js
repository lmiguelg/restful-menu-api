const mongoose = require('mongoose');


const MenuSchema = mongoose.Schema({
    establishment_name: {
        type: String,
        trim: true,//'test' ' test'  'test '
        require: true
    },
    logo: {
        type: String,
        default: ''
    },
    categories: {
        type: []
    }
})

module.exports = Menu = mongoose.model('menu', MenuSchema);