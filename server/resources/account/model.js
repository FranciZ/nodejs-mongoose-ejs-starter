/**
 * Created by francizidar on 27/02/16.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({

    dateCreated : { type : Date, default : Date.now }

});

mongoose.model('Account', schema);