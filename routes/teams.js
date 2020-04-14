/*
GET /teams ― displays all the teams stored in the database, sorted by team name

GET /teams/:teamId — displays information regarding a single team; the team's ID is passed through the teamId parameter, and must match the associated MongoDB _id property
*/

var express = require('express');
var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var router = express.Router();

router.get('/teams', function (req, res, next) {
  Team.find().sort('name').exec(function (error, results) {
    if (error) {
      return next(error);
    }

    // Respond with valid data
    res.json(results);
  });
});

router.get('/teams/:teamId', function (req, res, next) {
  Team.findOne({
    _id: req.params.teamId
  }, function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

module.exports = router;