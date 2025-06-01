const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index');

const app = express();
const PORT = process.env.PORT || 5001;

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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});