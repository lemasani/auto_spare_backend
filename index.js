require('dotenv').config()
const express = require('express')

const db = require('./models'); // Import the models
const stockRoutes = require('./Routes/stockRoutes')



const app = express()

const port = process.env.PORT || 8000

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
// app.use('/api/stocks', stockRoutes)




db.sequelize.sync({ force: true }) // Use { force: true } to drop and recreate tables on every sync
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create tables:', err);
  });
  app.listen(port, () => {
    console.log(`server listening to port ${port}`);
  });