const { Sequelize } = require('sequelize');

// Connect Sequelize with PostgreSQL database
const sequelize = new Sequelize('photo_caption_contest', 'scientist137-user', 'scientist137-user', {
 host: 'localhost',
 dialect: 'postgres'
}); 

module.exports = { sequelize };