const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('photo_caption_contest', 'scientist137-user', 'scientist137-user', {
 dialect: 'postgres'
});

module.exports = { sequelize };