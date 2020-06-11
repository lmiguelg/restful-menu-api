const mongoose = require('mongoose');


const MenuSchema = mongoose.Schema({
    name_menu: {
        type: String,
        trim: true,//'test' ' test'  'test '
        require: true
    },
    timestamp : { type : Date, default: Date.now }
});



module.exports = Menu = mongoose.model('menu', MenuSchema);