const express = require('express');
const category = express.Router();

const { PostCategory, GetCategories } = require('../Controllors/categoryControllor');

// POST route to add a new stock
category.post('/', PostCategory);
category.get('/', GetCategories)



module.exports = category;