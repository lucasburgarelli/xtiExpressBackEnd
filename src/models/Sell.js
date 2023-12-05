const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

const SellModel = sequelize.define("Sell", {
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
  sel_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      isInt: true,
    },
  },
  sel_mediumprice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
    },
  },
  sel_date: {
    type: DataTypes.DATE,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  sel_time: {
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      isTime: true,
    },
  },
});

// TODO Foreign keys

module.exports = {
  create: async function (sell) {
    const sellNew = await SellModel.create(sell);
    return sellNew;
  },
  read: async function () {
    return await SellModel.findAll();
  },
  update: async function (cpf, code, date, time, sell) {
    const sellUpdated = await SellModel.update(sell, {
      where: {
        use_cpf: cpf,
        sto_code: code,
        sel_date: date,
        sel_time: time,
      },
    });

    return sellUpdated;
  },
  delete: async function (cpf, code, date, time) {
    const sellDeleted = await SellModel.destroy({
      where: {
        use_cpf: cpf,
        sto_code: code,
        sel_date: date,
        sel_time: time,
      },
    });
    return sellDeleted;
  },
  readByPk: async function (cpf, code, date, time) {
    const sell = await SellModel.findOne({
      where: {
        use_cpf: cpf,
        sto_code: code,
        sel_date: date,
        sel_time: time,
      },
    });
    return sell;
  },
};
