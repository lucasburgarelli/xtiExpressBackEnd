const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

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
    type: DataTypes.DATE,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  buy_time: {
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isTime: true,
    },
  },
});

module.exports = {
  create: async function (buy) {
    const buyNew = await BuyModel.create(buy);
    return buyNew;
  },
  read: async function () {
    return await BuyModel.findAll();
  },
  update: async function (cpf, code, date, time, buy) {
    const buyUpdate = await BuyModel.update(buy, {
      where: {
        use_cpf: cpf,
        sto_code: code,
        buy_date: date,
        buy_time: time,
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
};
