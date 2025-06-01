const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index');

const app = express();
// Ensure PORT is always 5001 unless explicitly set in environment
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// Routes
app.use('/api', require('./routes/index'));

// Start server
const server = app.listen(PORT, '0.0.0.0', (error) => {
    if (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please try a different port or kill the process using this port.`);
    } else {
        console.error('Server error:', error);
    }
    process.exit(1);
});