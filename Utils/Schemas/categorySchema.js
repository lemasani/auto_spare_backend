const Joi = require('joi');

const categorySchema = Joi.object({
  id: Joi.string().uuid(),
  name: Joi.string().required(),
});

module.exports = categorySchema;