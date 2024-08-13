const express = require('express');
const product = express.Router();

const { PostProduct, DeleteProduct, GetProducts, GetProduct, EditProduct } = require('../Controllors/productControllor');

// POST route to add a new stock
product.post('/', PostProduct);
product.get('/', GetProducts)
product.get('/:id', GetProduct)
product.put('/:id', EditProduct)

product.delete('/:id', DeleteProduct)

module.exports = product;