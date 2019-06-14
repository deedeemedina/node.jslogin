const express = require('express');
const router = express.Router();
//Login Page
router.get('/Login', (req, res) => res.render('login'));

//Register Page
router.get('/Register', (req, res) => res.render('register'));

module.exports = router;