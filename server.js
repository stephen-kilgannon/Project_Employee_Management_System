var express = require('express');
var app = express(); 
var bodyParser = require('body-parser')

let date_ob = new Date();
app.get('/', function (req, res) { 
res.send("Hello from Server"); 
}) 
app.use(bodyParser.urlencoded({ extended: false })) 
app.post('/', function(req, res) {    
res.send('Got the temp data, thanks..!!');     
console.log(date_ob + JSON.stringify(req.body)); }) 
var server = app.listen(8081, function () {    
var host = server.address().address    
var port = server.address().port 
console.log("Example server listening at localhost:%s", host, port) })