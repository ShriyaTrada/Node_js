const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).max(50).required(),
    role: Joi.string().valid('user', 'admin').optional()
});

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().required()
});

const cartSchema = Joi.object({
    userId: Joi.number().integer().required(),
    productId: Joi.number().integer().required(),
    quantity: Joi.number().integer().min(1).default(1)
});

module.exports = { userSchema, productSchema, cartSchema };
