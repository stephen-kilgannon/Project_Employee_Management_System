var mongoose = require('mongoose');
var dbUrl = 'mongodb+srv://admin:admin@clusterg00303770-uacga.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {useNewUrlParser: true ,
  useNewUrlParser: true, useUnifiedTopology: true});



// Close the Mongoose connection on Control+C
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

require('../models/employee');
require('../models/team');