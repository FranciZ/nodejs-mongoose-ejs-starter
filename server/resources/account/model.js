/**
 * Created by francizidar on 27/02/16.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({

    email       : { type:String, required:true, unique:true },
    password    : { type:String, required:true },
    personalInformation : {
        name    : String,
        surname : String,
        birth   : Date,
        city    : String,
        country : String,
        postalCode  : String
    },
    dateCreated : { type : Date, default : Date.now }

});

mongoose.model('Account', schema);