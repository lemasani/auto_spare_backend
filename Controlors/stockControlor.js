const Stock = require('../Models/stockModel');

exports.PostStock = async (req, res) => {
    try {
      const { name, quantity, actualPrice, sellingPrice, imageUrl } = req.body;
      const newStock = await Stock.create({ name, quantity, actualPrice, sellingPrice, imageUrl });
      res.status(201).json(newStock);
    } catch (error) {
      console.error('Error creating stock:', error);
      res.status(500).json({ error: 'Failed to create stock' });
    }
}

exports.GetStock = async (req, res) =>{
    try {
        const stocks = await Stock.findAll();
        res.status(200).json(stocks);
    } catch (error) {
        console.error('Error fetching stocks', error)
        res.status(500).json({
            error: 'Error fetching Stocks'
        })
    }
}