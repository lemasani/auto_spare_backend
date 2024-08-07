const express = require('express');
const product = express.Router();

const { PostProduct, DeleteProduct, GetProducts, GetProduct } = require('../Controllors/productControllor');

// POST route to add a new stock
product.post('/', PostProduct);
product.get('/', GetProducts)
product.get('/:id', GetProduct)

product.delete('/:id', DeleteProduct)

module.exports = product;