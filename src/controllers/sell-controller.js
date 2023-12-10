const SellModel = require("../models/sell");
const UserModel = require("../models/user");
const BuyModel = require("../models/buy");
const StockModel = require("../models/stock");
const { sucess, fail } = require("../helpers/response");

exports.post = async (req, res, next) => {
  try {
    let sell = await SellModel.create(req.body);
    res.status(201).json(sucess(sell));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.postSell = async (req, res, next) => {
  try {
    let buys = await BuyModel.readByCpfCode(req.params.cpf, req.body.code);
    let sells = await SellModel.readByCpfCode(req.params.cpf, req.body.code);
    let user = await UserModel.readByPK(req.params.cpf);
    if (!buys) res.status(404).json(fail(buys));
    else {
      if (sells) {
        let stock = await StockModel.readByCode(req.body.code);
        let amount = 0;
        sells.forEach((sell) => {
          amount -= sell.sel_amount;
        });
        buys.forEach((sell) => {
          amount += sell.buy_amount;
        });
        if (amount <= req.params.amount) res.status(404).json(fail(buys));
        else {
          let sell = await SellModel.create({
            use_cpf: req.params.cpf,
            sto_code: req.body.code,
            sel_amount: req.params.amount,
            sel_mediumprice: req.params.mediumprice,
          });
          res.status(201).json(sucess(sell));

          user.use_money += req.params.amount * stock.sto_price;
          await UserModel.update(req.params.cpf, user);
        }
      } else {
        let sell = await SellModel.create({
          use_cpf: req.params.cpf,
          sto_code: req.body.code,
          sel_amount: req.params.amount,
          sel_mediumprice: stock.sto_price,
        });
        res.status(201).json(sucess(sell));

        user.use_money += req.params.amount * stock.sto_price;
        await UserModel.update(req.params.cpf, user);
      }
    }
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let sell = await SellModel.read();
    if (!sell) res.status(404).json(fail(sell));
    else res.status(200).json(sucess(sell));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try {
    let sell = await SellModel.readByCode(
      req.query.cpf,
      req.query.code,
      req.query.date,
      req.query.time
    );
    if (!sell) res.status(404).json(fail(sell));
    else res.status(200).json(sucess(sell));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.put = async (req, res, next) => {
  try {
    let sell = await SellModel.update(
      req.query.cpf,
      req.query.code,
      req.query.date,
      req.query.time,
      req.body
    );
    if (!sell) res.status(404).json(fail(sell));
    else res.status(200).json(sucess(sell));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    let sell = await SellModel.delete(
      req.query.cpf,
      req.query.code,
      req.query.date,
      req.query.time
    );
    if (!sell) res.status(404).json(fail(sell));
    else res.status(200).json(sucess(sell));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};
