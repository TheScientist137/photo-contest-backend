const express = require('express');
const session = require('express-session');
const app = express();
const { sequelize } = require('./db/connection');
const { seedDataBase } = require('./db/seed');
const routes = require('./routes/routes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
require('./db/models'); // Import models for register them on sequalize

// ------- App Config -------

app.use(session({ // express-session configuration
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // https => secure: true
}))

app.use(express.json()); // Middleware to parse json

app.use('/api', routes);
app.use('/auth', authRoutes);

// ------- Server Config -------

const startServer = async () => {
 try {
  await sequelize.authenticate(); // Coinnect witg postgreSQL
  console.log('Connected with database');

  await sequelize.sync({ force: true }); // Syncronize tables (force: true elimina y crea las tablas al iniciar al servidor)
  console.log('Database synchronized with ORM');

  await seedDataBase(); // Seed database after sync

  const PORT = process.env.SERVER_PORT;
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
 } catch (error) {
    console.error('Error connecting with ORM Sequelize', error);
 }
}

startServer();
