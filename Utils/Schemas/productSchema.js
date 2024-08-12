const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    manufacturer: Joi.string(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().integer().required(),
    category_id: Joi.string().uuid().required(),
    imageUrl: Joi.string().uri().allow(null, ''),
});

module.exports = productSchema;