// middleware/userValidate.js
const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().required(),
  
});

module.exports = { userSchema };
