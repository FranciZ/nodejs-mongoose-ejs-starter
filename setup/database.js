/**
 * Created by francizidar on 27/02/16.
 */
var mongoose = require('mongoose');
var chalk = require('chalk');

exports.connect = function(cb){

    // TODO change database name based on project
    mongoose.connect('mongodb://localhost/archi-file-db');

    mongoose.connection.once('open', function(){

        if(cb){
            console.log('DATABASE - connected')
            cb(true);
        }

    });

    mongoose.connection.on('error', function(err){

        console.log(chalk.red('DATABASE ERROR: '), err);

        if(cb){
            cb(false);
        }

    });


};