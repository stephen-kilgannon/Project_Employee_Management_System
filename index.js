var http = require('http');
var employeeService = require('./lib/employees');
var PORT = 3000; 

http.createServer(function (req, res) {
  // A parsed url to work with in case there are parameters
  var _url;
  

  if (_url = /^\/employees$/i.exec(req.url)) {
    // return a list of employees
    employeeService.getEmployees(function (error, data) {
      if (error) {
        // send a 500 error
      }
      // send the data with a 200 status code
    });
  } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
    // find the employee by the id in the route
    employeeService.getEmployee(_url[1], function (error, data) {
      if (error) {
        // send a 500 error
      }

      if (!data) {
        // send a 404 error
      }

      // send the data with a 200 status code
    });
  } else {
    // try to send the static file if it exists,
    // if not, send a 404
  }
}).listen(PORT, '127.0.0.1');

console.log(`application started on ${PORT}`)