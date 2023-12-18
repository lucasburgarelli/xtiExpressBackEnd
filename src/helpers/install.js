const { sucess, fail } = require("../helpers/response");
const UserModel = require("../models/user");
const BuyModel = require("../models/buy");
const SellModel = require("../models/sell");
const StockModel = require("../models/stock");
const Mock = require("../helpers/mock");

module.exports = async (req, res, next) => {
  try {
    Mock.usersData.forEach((user) => UserModel.create(user));
    Mock.stockData.forEach((stock) => StockModel.create(stock));
    Mock.buyData.forEach((buy) => BuyModel.create(buy));
    Mock.sellData.forEach((sell) => SellModel.create(sell));
    await res.status(201).json(sucess("Install complete"));
  } catch (error) {
    await res.status(400).json(sucess("Install error"));
  }
};
