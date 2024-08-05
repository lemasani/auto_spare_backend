// const Stock = require('../models/stockModel');

// exports.PostStock = async (req, res) => {
//     try {
//       const { name, quantity, actualPrice, imageUrl } = req.body;
//       const newStock = await Stock.create({ name, quantity, actualPrice, imageUrl });
//       res.status(201).json(newStock);
//     } catch (error) {
//       console.error('Error creating stock:', error);
//       res.status(500).json({ error: 'Failed to create stock' });
//     }
// }

// exports.GetStock = async (req, res) =>{
//     try {
//         const stocks = await Stock.findAll();
//         res.status(200).json(stocks);
//     } catch (error) {
//         console.error('Error fetching stocks', error)
//         res.status(500).json({
//             error: 'Error fetching Stocks'
//         })
//     }
// }

// exports.RemoveItemFromStock = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { sellingPrice, quantity, status } = req.body;

//         // Find the stock item by its ID
//         const stockItem = await Stock.findByPk(id);

//         if (!stockItem) {
//             return res.status(404).json({ error: 'Stock item not found' });
//         }

//         // Update the sellingPrice field
//         stockItem.sellingPrice = sellingPrice;
//         stockItem.quantity = quantity;
//         stockItem.status = status

//         // Update the status field based on quantity
//         stockItem.status = stockItem.quantity > 0 ? 'instock' : 'outstock';

//         // Save the changes
//         await stockItem.save();

//         res.status(200).json(stockItem);
//     } catch (error) {
//         console.log('error removing item from stock', error);
//         res.status(500).json({
//             error: 'Error on removing item from stock'
//         });
//     }
// };