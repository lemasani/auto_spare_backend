require('dotenv').config()
const express = require('express')

const sequelize = require('./Config/database');

const stockRoutes = require('./Routes/stockRoutes')

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())


// Routes
app.use('/api/stocks', stockRoutes)


// Test the database connection
sequelize.sync()
  .then(() => {
    console.log('Database connection has been established successfully.');
    // Start the server only if the database connection is successful
    app.listen(port, () => {
      console.log(`server listening to port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });