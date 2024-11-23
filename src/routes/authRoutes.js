const express = require('express');
const router = express.Router();
const { registerUser, logInUser } = require('../controllers/authController');

// Route to register a new user
router.post('/register', registerUser);

// Route to log in
router.post('/login', logInUser);

// Route to log out

module.exports = router;
