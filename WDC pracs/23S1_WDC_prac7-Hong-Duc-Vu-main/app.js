var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session(
    {
        secret: 'who let the dogs out',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }
));

let req_count = 0;
app.use(function(req, res, next){
    req_count++;
    console.log(`Received ${req_count} requests`);
    next();
});



app.use('/users*', function(req, res, next){
    if (req.method === 'POST' && req.get('Content-type') !== 'application/json'){
        res.sendStatus(412);
    }
    next();
});

app.use('/users*', function (req, res, next) {
    if (req.method === 'POST'){
        console.log('POST from a user ');
    }
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
