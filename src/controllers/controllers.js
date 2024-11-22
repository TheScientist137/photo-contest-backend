const { ImageModel, CaptionModel } = require("../db/models");

// Controller to obtain all images
const getAllImages = async (req, res) => {
 try {
  const images = await ImageModel.findAll();
  res.status(200).json(images);
 } catch (error) {
    res.status(500).json({ message: "Error obtaining all images", error });
   }
};

// Controller to obtain an image by id with its captions
const getImageById = async (req, res) => {
  try {
    const imageId = req.params.id;

    const image = await ImageModel.findByPk(imageId, {
      include: [{ model: CaptionModel }],
    });

    !image
      ? res.status(404).json({ message: "Image not found" })
      : res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ message: "Error obtaining image by id", error });
  }
};

// Controller to add a new caption to a specific image
const postNewCaption = async (req, res) => {
  try {
   const { text } = req.body;
   const imageId = req.params.id;

   const image = await ImageModel.findByPk(imageId);
   if (!image) {
    return res.status(404).json({ message: 'Image not found' })
   }

   const newCaption = await CaptionModel.create({ text, imageId });
   res.status(201).json(newCaption);
  } catch (error) {
     res.status(500).json({ message: "Failed to add caption", error });
  }
};

module.exports = { getAllImages, getImageById, postNewCaption };
