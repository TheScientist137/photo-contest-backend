const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');

// Image Model
const ImageModel = sequelize.define('Image', {
 url: { type: DataTypes.STRING, allowNull: false },
 alt_description: { type: DataTypes.STRING, allowNull: true }
}); 

// Caption Model
const CaptionModel = sequelize.define('Caption', {
 text: { type: DataTypes.STRING, allowNull: false },
 imageId: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: { model: 'Images', key: 'id' }
 } 
});

// Relation One - to - Many: One image belongs to many captions
ImageModel.hasMany(CaptionModel, { foreignKey: 'imageId' });

// Relation One - to - One: One caption belongs to one image
CaptionModel.belongsTo(ImageModel, { foreignKey: 'imageId' });

module.exports = { ImageModel, CaptionModel };