const { sucess, fail } = require("../helpers/response");
const StockModel = require("../models/stock");
const BuyModel = require("../models/buy");
const validator = require("../validators/stock-validator");

exports.post = async (req, res, next) => {
  try {
    let stock = await StockModel.create(req.query);
    res.status(201).json(sucess(stock));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let stocks = await StockModel.read();
    if (!stocks) res.status(404).json(fail(stocks));
    else res.status(200).json(sucess(stocks));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try {
    let stock = await StockModel.readByCode(req.params.code);
    if (!stock) res.status(404).json(fail(stock));
    else res.status(200).json(sucess(stock));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try {
    let stocks = await StockModel.readPagination(
      req.params.limit,
      req.params.offset
    );
    if (!stocks) res.status(404).json(fail(stocks));
    else res.status(200).json(sucess(stocks));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getMy = async (req, res, next) => {
  try {
    let buys = await BuyModel.readByCpf(req.query.cpf);
    if (!buys) res.status(404).json(fail(buys));
    else {
      let stocks = [];
      await buys.forEach((buy) => {
        stocks.push(StockModel.readByCode(buy.sto_code));
      });
      if (!stocks) res.status(404).json(fail(stocks));
      else res.status(200).json(sucess(stocks));
    }
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.put = async (req, res, next) => {
  try {
    let stock = await StockModel.update(req.params.code, req.query);
    if (!stock) res.status(404).json(fail(stock));
    else res.status(200).json(sucess(stock));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    let stock = await StockModel.delete(req.params.code);
    if (!stock) res.status(404).json(fail(stock));
    else res.status(200).json(sucess(stock));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};
