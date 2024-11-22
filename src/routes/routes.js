const express = require('express');
const router = express.Router();
const { getAllImages, getImageById, postNewCaption } = require('../controllers/controllers');

// Route to obtain all images
router.get('/images', getAllImages);

// Route to obtain an image by id
router.get('/images/:id', getImageById);

// Route to post a new caption
router.post('/images/:id/caption/new', postNewCaption);``

module.exports = router;
