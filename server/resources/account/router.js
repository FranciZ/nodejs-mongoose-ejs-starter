/**
 * Created by francizidar on 27/02/16.
 */
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');


exports.init = function(app){

    app.get('/api/account', function(req, res){



    });

    app.post('/api/account', function(req, res){

        var userData = req.body;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(userData.password, salt, function (err, hash) {

                console.log(hash);

                // 1. get a reference to the model
                var Account = mongoose.model('Account');

                // 2. create a new instance of the Account
                var newAccount = new Account({ email:userData.email, password:hash });

                // 3. save that instance to the database
                newAccount.save(function(err){
                    if(!err){
                        res.send(newAccount);
                    }else{
                        console.log(err);
                        res.sendStatus(400);
                    }
                });

            });
        });

    });

    app.post('/api/login', function(req, res){

        var userData = req.body;

        var Account = mongoose.model('Account');

        Account.findOne({ email:userData.email }, function(err, accountDoc){

            if(!err && accountDoc){

                bcrypt.compare(userData.password, accountDoc.password, function(err, match) {

                    if(match){

                        console.log('Account match and password match');

                        var hour = 3600000;
                        req.session.cookie.expires = new Date(Date.now() + hour);
                        req.session.cookie.maxAge = hour;
                        accountDoc.password = null;
                        req.session.user = accountDoc;

                        res.sendStatus(200);

                    }else{
                        res.sendStatus(401);
                    }

                });

            }

        });

    });

};