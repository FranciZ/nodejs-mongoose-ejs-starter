/**
 * Created by francizidar on 27/02/16.
 */


exports.init = function(app){

    // Sample resource
    require('./sample/router').init(app);
    require('./sample/model');

    // Account resource
    require('./account/router').init(app);
    require('./account/model');

    // Profile resource
    require('./profile/router').init(app);
    require('./profile/model');



};