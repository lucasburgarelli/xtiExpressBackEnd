const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

const BuyModel = sequelize.define("Buy", {
  use_cpf: {},
  sto_code: {},
  buy_amount: {},
  buy_mediumprice: {},
  buy_date: {},
  buy_time: {},
});

module.exports = {
  create: async function (buy) {},
  read: async function () {},
  update: async function (cpf, code, date, time) {},
  delete: async function (cpf, code, date, time) {},
};
