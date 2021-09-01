const Joi = require('joi')
const schema = Joi.object({
    username:Joi.string().required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().required().min(4).max(20),
   // confirmpassword:Joi.any().valid(Joi.ref('password')).required().messages({ 'any.only': '{{#label}} does not match' })
});

module.exports = schema