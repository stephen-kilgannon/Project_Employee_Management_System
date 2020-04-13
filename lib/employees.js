/*
Module toexporttwo functions, one toobtain a list of employees (getEmployees)
and one to fetch a single employee (getEmployee)
Both of these functions take callback as a parameter. That function that will be executed when the I/O is complete.
*/

var employeeDb = require('../database/employees');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees (callback) {
  setTimeout(function () {
    callback(null, employeeDb);
  }, 500);
}

function getEmployee (employeeId, callback) {
  getEmployees(function (error, data) {
    if (error) {
      return callback(error);
    }

    var result = data.find(function(item) {
      return item.id === employeeId;
    });

    callback(null, result);
  });
}