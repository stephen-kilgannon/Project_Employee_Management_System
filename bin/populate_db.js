var async = require('async');
var mongoose = require('mongoose');
require(process.cwd() + '/lib/connection');
var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');

var data = {
  employees: [
    {
      id: '1',
      name: {
        first: 'Stephen',
        last: 'Kilgannon'
      },
      image: '',
      address: {
        lines: ['17 Belmont'],
        city: 'galway',
        state: 'Galway',
        zip: 10118
      }
    },
    {
      id: '2',
      name: {
        first: 'Neil',
        last: 'Byrne'
      },
      address: {
        lines: ['over the road', 'St. 210'],
        city: 'sligo',
        state: 'sligo',
        zip: 15222
      }
    }
  ],
  teams: [
    {
      name: 'Front of House'
    },
    {
      name: 'Back of house'
    }
  ]
};

var deleteEmployees = function(callback) {
  console.info('Deleting employees');
  Employee.remove({}, function(error, response) {
    if (error) {
      console.error('Error deleting employees: ' + error);
    }

    console.info('Done deleting employees');
    callback();
  });
};

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

var deleteTeams = function(callback) {
  console.info('Deleting teams');
  Team.remove({}, function(error, response) {
    if (error) {
      console.error('Error deleting teams: ' + error);
    }

    console.info('Done deleting teams');
    callback();
  });
};

var addTeams = function(callback) {
  console.info('Adding teams');
  Team.create(data.teams, function (error, team1) {
    if (error) {
        console.error('Error: ' + error);
    } else {
        data.team_id = team1._id;
    }

    console.info('Done adding teams');
    callback();
  });
};

var updateEmployeeTeams = function (callback) {
  console.info('Updating employee teams');
  var team = data.teams[0];

  // Set everyone to be on the same team to start
  Employee.update({}, {
    team: data.team_id
  }, {
    multi: true
  }, function (error, numberAffected, response) {
    if (error) {
      console.error('Error updating employe team: ' + error);
    }

    console.info('Done updating employee teams');
    callback();
  });
};

async.series([
  deleteEmployees,
  deleteTeams,
  addEmployees,
  addTeams,
  updateEmployeeTeams
], function(error, results) {
  if (error) {
    console.error('Error: ' + error);
  }

  mongoose.connection.close();
  console.log('Done!');
});