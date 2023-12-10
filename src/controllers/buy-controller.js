const BuyModel = require("../models/buy");
const UserModel = require("../models/user");
const StockModel = require("../models/stock");
const { sucess, fail } = require("../helpers/response");

exports.post = async (req, res, next) => {
  try {
    let buy = await BuyModel.create(req.body);
    if (!buy) res.status(403).json(fail(buy));
    else res.status(200).json(sucess(buy));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.postBuy = async (req, res, next) => {
  try {
    let buy = await BuyModel.readByPk(
      req.query.cpf,
      req.query.code,
      req.query.date,
      req.query.time
    );
    let userMoney = await UserModel.readByPK(req.query.cpf).use_money;
    let stockPrice = await StockModel.readByPK(req.query.code).sto_price;
    let quantity = req.query.quantity;

    if (use_money >= sto_price * quantity)
      res.status(400).json(fail("User money not enough."));
    else {
      let buy = await BuyModel.create({
        use_cpf: req.query.cpf,
        sto_code: req.query.code,
        sel_amount: quantity,
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
    let buy = await BuyModel.read();
    if (!buy) res.status(404).json(fail(buy));
    else res.status(200).json(sucess(buy));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try {
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

exports.put = async (req, res, next) => {
  try {
    let buy = await BuyModel.update(
      req.query.cpf,
      req.query.code,
      req.query.date,
      req.query.time,
      req.body
    );
    if (!buy) res.status(404).json(fail(buy));
    else res.status(200).json(sucess(buy));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
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
