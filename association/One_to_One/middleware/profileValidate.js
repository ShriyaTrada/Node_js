// middleware/profileValidate.js
const Joi = require('joi');

const profileSchema = Joi.object({
  bio: Joi.string().optional(),
  userId: Joi.number().integer().required() // Assuming that every profile is linked to a user
});

module.exports = { profileSchema };
