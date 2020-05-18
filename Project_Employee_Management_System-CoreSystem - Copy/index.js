var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


require('./lib/connection');
var employees = require('./routes/employees');
var teams = require('./routes/teams');
var addEmployee = require('./routes/addEmployee');

var app = express();



// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
try {
    app.use(express.static(path.join(__dirname, 'public')));
    console.log(path.join(__dirname, 'public'));
    console.log(__dirname);
}catch{
    console.log("Error express line 25");
}


// application routes
app.use(employees);
app.use(teams);
app.use(addEmployee);

module.exports = app;