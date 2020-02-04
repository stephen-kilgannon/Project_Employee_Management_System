const express = require('express'); // using express router 
const router = express.Router();  // create a variable called router 


// login page
router.get('/Login', (req,res) => res.render ('login')); // creating router


// Register
router.get('/Register', (req,res) => res.render ('register')); // creating router

// Dashboard
//router.get('/Dashboard', (req,res) => res.render ('dashboard')); // creating router

module.exports = router; 