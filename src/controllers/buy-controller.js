const { sucess, fail } = require("../helpers/response");
const BuyModel = require("../models/buy");
const UserModel = require("../models/user");
const StockModel = require("../models/stock");
const validator = require("../validators/buy-validator");
const pagValidator = require("../validators/pagination-validatior");

exports.post = async (req, res, next) => {
  try {
    await validator.buySchema.validateAsync(req.query)

    let buy = await BuyModel.create({
      use_cpf: req.query.cpf,
      sto_code: req.query.code,
      sel_amount: req.query.amount,
      sel_mediumprice: req.query.mediumprice,
      sel_date: req.query.date,
      sel_time: req.query.time
    });
    if (!buy) res.status(403).json(fail(buy));
    else res.status(201).json(sucess(buy));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.postBuy = async (req, res, next) => {
  try {
    await validator.buyActionSchema.validateAsync(req.query)

    let userMoney = await UserModel.readByPK(req.query.cpf).use_money;
    let stockPrice = await StockModel.readByPK(req.query.code).sto_price;

    if (userMoney >= sto_price * req.query.amount)
      res.status(400).json(fail("User money not enough."));
    else {
      let buy = await BuyModel.create({
        use_cpf: req.query.cpf,
        sto_code: req.query.code,
        sel_amount: req.query.amount,
        sel_mediumprice: stockPrice,
      });
      if (!buy) res.status(400).json(fail(buy));
      else res.status(201).json(sucess(buy));
    }
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let buys = await BuyModel.read();
    if (!buys) res.status(404).json(fail(buys));
    else res.status(200).json(sucess(buys));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try {
    await validator.buyPrimarySchema.validateAsync(req.query)
    let buy = await BuyModel.readByCode(
      req.query.cpf,
      req.query.code,
      req.query.date,
      req.query.time
    );
    if (!buy) res.status(404).json(fail(buy));
    else res.status(200).json(sucess(buy));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try {
    await pagValidator.paginationSchema.validateAsync(req.query)
    let stocks = await BuyModel.readPagination(
      req.query.limit,
      req.query.offset
    );
    if (!stocks) res.status(404).json(fail(stocks));
    else res.status(200).json(sucess(stocks));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.put = async (req, res, next) => {
  try {
    await validator.buySchema.validateAsync(req.query)
    let buy = await BuyModel.update(
      {
        use_cpf: req.query.cpf,
        sto_code: req.query.code,
        sel_amount: req.query.amount,
        sel_mediumprice: req.query.mediumprice,
        buy_date: req.query.date,
        buy_time: req.query.time
      }
    );
    if (!buy) res.status(404).json(fail(buy));
    else res.status(200).json(sucess(buy));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    await validator.buyPrimarySchema.validateAsync(req.query)
    let buy = await BuyModel.delete(
      req.query.cpf,
      req.query.code,
      req.query.date,
      req.query.time
    );
    if (!buy) res.status(404).json(fail(buy));
    else res.status(200).json(sucess(buy));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};
