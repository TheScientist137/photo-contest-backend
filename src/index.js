const express = require('express');
const app = express();
const { sequelize } = require('./db/connection');
const PORT = 3001;

// Import models for register them on sequalize
require('./db/models');

app.use(express.json()); // Middleware to parse json

app.get('/', (req, res) => {
 res.send('Hello World');
});

const startServer = async () => {
 try {
  await sequelize.authenticate();
  console.log('Connected with database');

  await sequelize.sync();
  console.log('Database synchronized with ORM');

  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
 } catch (error) {
    console.error('Error connecting with ORM Sequelize', error);
 }
}

startServer();
