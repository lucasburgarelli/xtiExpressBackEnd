const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");
const UserModel = require("../models/user").UserModel;
const StockModel = require("../models/stock").StockModel;

const BuyModel = sequelize.define("Buy", {
  use_cpf: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [11, 11],
        msg: "CPF must have 11 characters",
      },
    },
  },
  sto_code: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [0, 11],
        msg: "Stock code out of range",
      },
    },
  },
  buy_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      isInt: true,
    },
  },
  buy_mediumprice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
    },
  },
  buy_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  buy_time: {
    type: DataTypes.TIME,
    defaultValue: DataTypes.NOW,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true
    },
  },
});

UserModel.hasMany(BuyModel, { as: "UserBuy", foreignKey: "use_cpf" });
StockModel.hasMany(BuyModel, { as: "StockBuy", foreignKey: "sto_code" });

BuyModel.belongsTo(UserModel, { foreignKey: "use_cpf" });
BuyModel.belongsTo(StockModel, { foreignKey: "sto_code" });

module.exports = {
  create: async function (buy) {
    const buyNew = await BuyModel.create(buy);
    return buyNew;
  },
  read: async function () {
    return await BuyModel.findAll();
  },
  readPagination: async function (limit, offset) {
    return await BuyModel.findAndCountAll({
      offset: offset,
      limit: limit,
    });
  },
  update: async function (buy) {
    const buyUpdate = await BuyModel.update(buy, {
      where: {
        use_cpf: buy.use_cpf,
        sto_code: buy.sto_code,
        buy_date: buy.buy_date,
        buy_time: buy.buy_time,
      },
    });
  },
  delete: async function (cpf, code, date, time) {
    const buyDelete = await BuyModel.destroy({
      where: {
        use_cpf: cpf,
        sto_code: code,
        buy_date: date,
        buy_time: time,
      },
    });
  },
  readByPK: async function (cpf, code, date, time) {
    const buy = await BuyModel.findOne({
      where: {
        use_cpf: cpf,
        sto_code: code,
        buy_date: date,
        buy_time: time,
      },
    });
    return buy;
  },
  readByCpfCode: async function (cpf, code) {
    const buy = await BuyModel.findOne({
      where: {
        use_cpf: cpf,
        sto_code: code,
      },
    });
    return buy;
  },
  readByCpf: async function (cpf) {
    const buy = await BuyModel.findOne({
      where: {
        use_cpf: cpf,
      },
    });
    return buy;
  },
};
