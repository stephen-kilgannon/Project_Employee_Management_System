const express = require('express'); // using express router 
const router = express.Router();  // create a variable called router 

router.get('/', (req,res) => res.send ('welcome')); // creating router

module.exports = router; 