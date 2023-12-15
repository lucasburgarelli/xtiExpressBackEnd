const Joi = require('joi');

exports.userSchema = Joi.object({
    cpf: Joi.string().length(11).min(11).pattern(/^[0-9]+$/).required(),
    name: Joi.string().min(10).max(255).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,100}$')).required(),
    birthdate: Joi.date().required(),
    money: Joi.number().required().default(0),
    privileges: Joi.string().length(1).required().valid("I", "A").default("I")
})

exports.loginSchema = Joi.object({
    cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,100}$')).required()
})
exports.cpfSchema = Joi.object({
    cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required()
})