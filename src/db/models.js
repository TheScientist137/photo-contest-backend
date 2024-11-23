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

// User Model
const UserModel = sequelize.define('User', {
 username: { type: DataTypes.STRING, allowNull: false, unique: true },
 email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
 password: { type: DataTypes.STRING, allowNull: false }
});

// Relation One - to - Many: One image belongs to many captions
ImageModel.hasMany(CaptionModel, { foreignKey: 'imageId' });

// Relation One - to - One: One caption belongs to one image
CaptionModel.belongsTo(ImageModel, { foreignKey: 'imageId' });

module.exports = { ImageModel, CaptionModel, UserModel };