const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

// Connect Sequelize with PostgreSQL database
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
 dialect: 'postgres'
}); 

module.exports = { sequelize };