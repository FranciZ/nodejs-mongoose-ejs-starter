/**
 * Created by francizidar on 27/02/16.
 */


exports.init = function(app){

    // Sample resource
    require('./sample/router')(app);
    require('./sample/model');

    // Account resource
    require('./account/router')(app);
    require('./account/model');



};