const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a new instance of Sequelize for SQL database connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.SQLITE_STORAGE || './database.sqlite',
  logging: false, // Optional: disable SQL logging
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the SQL database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the SQL database:', err);
    });

module.exports = { sequelize };