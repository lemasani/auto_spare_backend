const express = require('express');
const stock = express.Router();

const { PostStock, GetStock } = require('../Controlors/stockControlor');

// POST route to add a new stock
stock.post('/', PostStock);
stock.get('/', GetStock)

module.exports = stock;