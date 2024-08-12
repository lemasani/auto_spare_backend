const {Product, Category} = require('../models');
const generateSKU = require('../Utils/generateSKU');
const productSchema = require('../Utils/Schemas/productSchema');
const {ValidationError, NotFoundError} = require('./../Utils/customError')


//create a product
exports.PostProduct = async (req, res, next) => {
  try {
    // Validate the request body
    const { error } = productSchema.validate(req.body);
    if (error) {
      throw new ValidationError(error.details[0].message);
    }

    const { name, description, manufacturer, price, quantity, category_id, imageUrl } = req.body;
    const category = await Category.findByPk(category_id);

    if (!category) {
      throw new ValidationError('Invalid category ID');
    }

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
    next(error); 
  }
};

//gets all products
exports.GetProducts = async (req, res, next) => {
  try {

    const Products = await Product.findAll();
    if (!Products) {
      throw new NotFoundError('No products found');
    }
    res.status(200).json(Products);
  } catch (error) {
    console.error('Error fetching Products', error);
    next(error)
  }
};

//gets specific product
exports.GetProduct = async (req, res, next)=>{
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id, { include: [Category] });

    if (!product) {
      throw new NotFoundError('Product not found')
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching Product', error);
    next(error)
  }
}


// deletes a product
exports.DeleteProduct = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Find the Product item by its ID
      const ProductItem = await Product.findByPk(id);
  
      if (!ProductItem) {
        throw new NotFoundError('Product not found to be deleted')
      }
  
      // Delete the Product item
      await ProductItem.destroy();
  
      res.status(200).json({ message: 'Product item deleted successfully' });
    } catch (error) {
      console.error('Error deleting Product item', error);
      next(error)
    }
  };