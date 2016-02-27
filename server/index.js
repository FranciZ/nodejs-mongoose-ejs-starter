/**
 * Created by francizidar on 27/02/16.
 */
var express     = require('express');
var chalk       = require('chalk');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var serveStatic = require('serve-static');
var app         = express();


exports.init = function(){

    app.set('view engine', 'ejs');

    // allow requests from other domains
    app.use(cors());
    // serve static files in the assets folder on /assets url
    app.use('/assets', express.static('assets'));
    app.use('/cms', express.static('cms'));
    // prepare requests to provide data in req.body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    app.listen(3000, function(){

        console.log('SERVER - listening on port 3000');

    });

};