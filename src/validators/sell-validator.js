const Joi = require('joi');

exports.sellSchema = Joi.object({
    cpf: Joi.string().length(11).min(11).pattern(/^[0-9]+$/).required(),
    code: Joi.string().min(3).max(11).required(),
    amount: Joi.number().integer().required(),
    mediumprice: Joi.number().required(),
    date: Joi.date().required(),
    time: Joi.string().pattern(/(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/).required()
})

exports.sellPrimarySchema = Joi.object({
    cpf: Joi.string().length(11).min(11).pattern(/^[0-9]+$/).required(),
    code: Joi.string().min(3).max(11).required(),
    amount: Joi.number().integer().required(),
    mediumprice: Joi.number().required()
})