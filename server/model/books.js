let mongoose = require('mongoose');
let bookModel = mongoose.Schema({
    name: String,
    email: String,
    telnumber: Number
},

{
    collection:"books"
});

module.exports = mongoose.model('book',bookModel);