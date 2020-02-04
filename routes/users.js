const express = require('express'); // using express router 
const router = express.Router();  // create a variable called router 


// login page
router.get('/Login', (req,res) => res.send ('Login')); // creating router


 // Register
 router.get('/Register', (req,res) => res.send ('Register ')); // creating router

module.exports = router; 