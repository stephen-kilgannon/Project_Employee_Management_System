var async = require('async');
var mongoose = require('mongoose');
var express = require('express');
//require('../lib/connection');
var Employee = require('../models/employee');
var router = express.Router();
fs = require('fs'); // writing employee data to a file 
let date_ob = new Date(); // used to timestamp employees 



var Identifier;

var getID = function() {

    Identifier = 9;
    return Identifier;
};

var data = {
    employees: [
        {
            id: getID(),
            name: {

                first: 'test',
                last: 'test1'
            },
            image: '',
            address: {
                lines: ['22'],
                city: 'galway',
                state: 'Galway',
                zip: 10118
            }
        }]};

/*var addEmployees = function(callback) {
    console.info('Adding employees');

};*/


async.series([

    getID,
], function(error, results) {
    if (error) {
        console.error('Error: ' + error);
    }

    mongoose.connection.close();
    console.log('Done!');
});
router.post('/FingerPrint', function (req, res, next) {
    console.log('ID::',req.query.id);

    fs.appendFile('log.txt', "ID " +  req.query.id + " Time " + date_ob  + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
        fs.close; 
      });

})


router.post('/addEmployees', function (req, res, next) {

    let employee = new Employee(
        {
            id: req.body.id,
            name: {

                first: req.body.firstname,
                last: req.body.lastname
            },
            image: '',
            address: {
                lines: ['22'],
                city: 'galway',
                state: 'Galway',
                zip: 10118
            }
        }
    );

    employee.save(function(err){
        if(err){
            console.log('err',err);
            return res.status(500).json({
                message: 'Error in database'
            });
        }

        return res.status(200).json({
            message: 'Successflly inserted in database'
        });
    });

    /*employee.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
*/
    /*Employee.save().sort('name').exec(function (error, results) {
        if (error) {
            return next(error);
        }

        // Respond with valid data
        res.json(results);
    });*/
    /*return new Promise(async (resolve, reject) => {
        try {
            Employee.create(data.employees, function (error) {
                if (error) {
                    console.error('Error: ' + error);
                }

                console.info('Done adding employees');
            });

        } catch (err) {
            console.error('editUser', err)

            return reject(err)
        }
    })*/

    /*try{
        Employee.create(data.employees, function (error) {
            if (error) {
                console.error('Error: ' + error);
            }

            console.info('Done adding employees');
        });
    }catch(err){
        console.log('addemployeeerr:',err);
    }*/

});



module.exports = router;




/*


var Identifier;

var getID = function() {

    Identifier = 8;
    return Identifier;
};

var data = {
    employees: [
        {
            id: getID(),
            name: {

                first: 'Oisin',
                last: 'Mcaff'
            },
            image: '',
            address: {
                lines: ['22'],
                city: 'galway',
                state: 'Galway',
                zip: 10118
            }
        }]};

var addEmployees = function(callback) {
    console.info('Adding employees');
    Employee.create(data.employees, function (error) {
        if (error) {
            console.error('Error: ' + error);
        }

        console.info('Done adding employees');
        callback();
    });
};


 async.series([

    getID,
    addEmployees
  ], function(error, results) {
    if (error) {
      console.error('Error: ' + error);
    }
  
    mongoose.connection.close();
    console.log('Done!');
  });*/


