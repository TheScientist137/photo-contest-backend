const { ImageModel } = require('../db/models');

// Controller to obtain all images
const getAllImages = async (req, res) => {
 try {
  const images = await ImageModel.findAll();
  res.status(200).json(images);

 } catch (error) {
    res.status(500).json({ error: 'Error obtaining all images' });
 }
}

// Controller to obtain an image by id
const getImageById = async (req, res) => {
 try {
  const image = await ImageModel.findByPk(req.params.id);
  !image ? 
  res.status(400).json({ message: 'Image not found' }) : 
  res.status(200).json(image);
 
 } catch (error) {
    res.status(500).json({ error: 'Error obtaining image by id' });
 }
}

module.exports = { getAllImages, getImageById };
