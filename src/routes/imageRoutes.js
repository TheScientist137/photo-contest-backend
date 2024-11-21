const express = require('express');
const router = express.Router();
const { getAllImages, getImageById } = require('../controllers/imageController');

// Route to obtain all images
router.get('/images', getAllImages);

// Route to obtain an image by id
router.get('/images/:id', getImageById);

module.exports = router;
