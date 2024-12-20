const express = require('express');
const router = express.Router();
const { getAllImages, getImageById, postNewCaption } = require('../controllers/controller');
const authenticateUser = require('../middleware/auth');

// Route to obtain all images
router.get('/images', getAllImages);

// Route to obtain an image by id
router.get('/images/:id', getImageById);

// Route to post a new caption (Only for authenticated users)
router.post('/images/:id/caption', authenticateUser, postNewCaption);

module.exports = router;
