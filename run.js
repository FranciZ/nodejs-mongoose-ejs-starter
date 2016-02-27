/**
 * Created by francizidar on 27/02/16.
 */

var server = require('./server');
var database = require('./setup/database');

function init(){

    database.connect(function(status){

        if(status === true){
            server.init();
        }else{
            console.log('Something is wrong with the database');
        }

    });


}

init();