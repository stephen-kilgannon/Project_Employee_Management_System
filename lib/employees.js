/*
Module to export two functions, one to obtain a list of employees (getEmployees)
and one to fetch a single employee (getEmployee)
Both of these functions take callback as a parameter. That function that will be executed when the I/O is complete.
*/

var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees (callback) {
  Employee.find().sort('name.last').exec(callback);
}

function getEmployee (employeeId, callback) {
  Employee.findOne({
    id: employeeId
  }).populate('team').exec(callback);
}