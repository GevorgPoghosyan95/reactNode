const Joi = require('joi')
const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().required().min(4).max(20)
});

module.exports = schema