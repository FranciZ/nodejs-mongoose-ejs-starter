// DON'T FORGET TO ADD REQUIRE STATEMENTS IN THE INDEX.js FILE

var mongoose = require('mongoose');

var schema = mongoose.Schema({

    type        : { type:String }, // 'basic','premium'
    category    : { type:String },
    dateCreated : { type : Date, default : Date.now },
    account     : { type : String, ref : 'Account' }

});

mongoose.model('Profile', schema);