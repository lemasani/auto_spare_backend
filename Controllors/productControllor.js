const {Product, Category} = require('../models');
const generateSKU = require('./../Services/generateSKU');


//create a product
exports.PostProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            manufacturer,
            price,
            quantity,
            category_id,
            imageUrl,
        } = req.body;
        const category = await Category.findByPk(category_id);
        console.log(category)
        const sku = generateSKU(name, category.name);
        const newProduct = await Product.create({
            sku,
            name,
            description,
            manufacturer,
            price,
            quantity,
            category_id,
            imageUrl,
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating Product:', error);
        res.status(500).json({ error: 'Failed to create Product' });
    }
};

//gets all products
exports.GetProducts = async (req, res) => {
  try {
    const Products = await Product.findAll();
    res.status(200).json(Products);
  } catch (error) {
    console.error('Error fetching Products', error);
    res.status(500).json({
      error: 'Error fetching Products',
    });
  }
};

//gets specific product
exports.GetProduct = async (req, res)=>{
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id, { include: [Category] });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching Product', error);
    res.status(500).json({
      error: 'Error fetching Product',
    });
  }
}


// deletes a product
exports.DeleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the Product item by its ID
      const ProductItem = await Product.findByPk(id);
  
      if (!ProductItem) {
        return res.status(404).json({ error: 'Product item not found' });
      }
  
      // Delete the Product item
      await ProductItem.destroy();
  
      res.status(200).json({ message: 'Product item deleted successfully' });
    } catch (error) {
      console.error('Error deleting Product item', error);
      res.status(500).json({
        error: 'Error deleting Product item',
      });
    }
  };