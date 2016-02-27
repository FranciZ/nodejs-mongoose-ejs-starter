/**
 * Created by francizidar on 27/02/16.
 */
var express     = require('express');
var chalk       = require('chalk');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var serveStatic = require('serve-static');
var session     = require('express-session');
var app         = express();
var resources   = require('./resources');


exports.init = function(){

    app.set('view engine', 'ejs');

    // allow requests from other domains
    app.use(allowCrossDomain);

    app.use(session({
        genid: function(req) {
            return guid(); // use UUIDs for session IDs
        },
        secret: 'lhdfs903wrodp89wfejo90qcisoj'
    }));

    // serve static files in the assets folder on /assets url
    app.use('/assets', express.static('assets'));
    app.use('/cms', express.static('cms'));
    // prepare requests to provide data in req.body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    // bootstrapping all resources (models and routes)
    resources.init(app);

    app.listen(3000, function(){

        console.log('SERVER - listening on port 3000');

    });

};

// domains that are allowed to call this server
var whitelist = ['http://localhost:9001', 'http://example2.com'];

function getOrigin(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
}

//CORS middleware
var allowCrossDomain = function(req, res, next) {

    var origin = req.get('origin');

    getOrigin(origin, function(err, originIsWhitelisted){

        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', true);

        next();

    });

};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}