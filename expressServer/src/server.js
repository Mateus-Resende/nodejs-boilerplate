// importing express
var express = require('express');

// creating server
var app = express();

// importing server configuration
var config = require('./config');

// Middleware for parsing body content
var bodyParser = require('body-parser');

// Middleware for parsing cookies
var cookieParser = require('cookie-parser');

// Instantiating routes
var users = require('./routes/users/userRouting');
var login = require('./routes/login/loginRouting');

var mongoose = require('mongoose');

mongoose.connect(config.mongo.uri, config.mongo.options);

console.log('Making public folder public...');
app.use(express.static('../public'));

// Adding body-parser as first middleware
console.log('Adding Middlewares...');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Adding cookie-parser as third middleware
app.use(cookieParser());

// Preparing routes
console.log('Adding routes...');
app.use('/users', users);
app.use('/login', login);

console.log('Exporting server object...');
module.exports = {
    makeServer: function(done) {
        console.log('Initializing server...');
        var server = app.listen(config.port, config.host, function(){
            var address = server.address();
            
            console.log('Listening at http://%s:%s...', address.address, address.port);
            if(done) done();
        });
        
        return server;
    },
    getServerConfig: function() {
        return config;
    }
};
console.log('Server object exported.');