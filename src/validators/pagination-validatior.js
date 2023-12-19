const Joi = require("joi");

exports.paginationSchema = Joi.object({
    limit: Joi.number().integer().required(),
    offset: Joi.number().integer().required()
})