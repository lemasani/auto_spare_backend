require('dotenv').config()
const express = require('express')

// Import the models
const db = require('./models'); 

//imports Routes
const ProductRoutes = require('./Routes/productRoute')
const CategoryRoutes = require('./Routes/categoryRoute');


//error handler import
const ErrorHandler  = require('./middleware/errorHandler');
const { NotFoundError } = require('./Utils/customError');

const app = express()

const port = process.env.PORT || 8000

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/products', ProductRoutes)
app.use('/api/category', CategoryRoutes)


// Middleware to catch undefined routes
app.use((req, res, next) => {
  next(new NotFoundError('Route not found'));
});

// Error handling middleware
app.use(ErrorHandler);


db.sequelize.sync() 
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create tables:', err);
});


app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

