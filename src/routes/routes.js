const express = require('express');
const router = express.Router();
const { getAllImages, getImageById } = require('../controllers/controllers');

// Route to obtain all images
router.get('/images', getAllImages);

// Route to obtain an image by id
// Change => this should include all captions in the image and other information
router.get('/images/:id', getImageById);

module.exports = router;
