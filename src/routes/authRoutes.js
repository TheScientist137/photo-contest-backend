const express = require('express');
const router = express.Router();
const { registerUser, logInUser, logOutUser } = require('../controllers/authController');

// Route to register a new user
router.post('/register', registerUser);

// Route to log in
router.post('/login', logInUser);

// Route to log out
router.post('/logout', logOutUser);

module.exports = router;
