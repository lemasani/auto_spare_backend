const express = require('express');
const stock = express.Router();
const Stock = require('../Models/stockModel');

// POST route to add a new stock
stock.post('/', async (req, res) => {
  try {
	const { name, quantity, actualPrice, sellingPrice, imageUrl } = req.body;
	const newStock = await Stock.create({ name, quantity, actualPrice, sellingPrice, imageUrl });
	res.status(201).json(newStock);
  } catch (error) {
	console.error('Error creating stock:', error);
	res.status(500).json({ error: 'Failed to create stock' });
  }
});

module.exports = stock;