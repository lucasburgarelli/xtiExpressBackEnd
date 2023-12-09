const StockModel = require("../models/stock");
const { sucess, fail } = require("../helpers/response");

exports.post = async (req, res, next) => {
  let stock = await StockModel.create(req.body);
  if (!stock) res.status(403).json(fail(stock));
  else res.status(200).json(sucess(stock));
};

exports.get = async (req, res, next) => {
  let stocks = await StockModel.read();
  if (!stocks) res.status(404).json(fail(stocks));
  else res.status(200).json(sucess(stocks));
};

exports.getByCode = async (req, res, next) => {
  let stock = await StockModel.readByCode(req.params.code);
  if (!stock) res.status(404).json(fail(stock));
  else res.status(200).json(sucess(stock));
};

exports.put = async (req, res, next) => {
  let stock = await StockModel.update(req.params.code, req.body);
  if (!stock) res.status(404).json(fail(stock));
  else res.status(200).json(sucess(stock));
};

exports.delete = async (req, res, next) => {
  let stock = await StockModel.delete(req.params.code);
  if (!stock) res.status(404).json(fail(stock));
  else res.status(200).json(sucess(stock));
};
