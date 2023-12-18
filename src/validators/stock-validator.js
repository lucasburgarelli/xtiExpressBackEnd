const Joi = require("joi");

exports.stockSchema = Joi.object({
  code: Joi.string().min(3).max(11).required(),
  companyname: Joi.string().min(3).max(255).required(),
  price: Joi.number().decimal().required(),
  sector: Joi.string().min(5).max(100),
  firstdate: Joi.date(),
});

exports.stockPrimarySchema = Joi.object({
  code: Joi.string().min(3).max(11).required(),
});
