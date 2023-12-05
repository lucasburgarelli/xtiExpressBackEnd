const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

const UserModel = sequelize.define("User", {
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
  use_name: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        args: [5, 255],
        msg: "",
      },
    },
  },
  use_password: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: {
        is: /^[0-9a-f]{100}$/i,
        msg: "",
      },
    },
  },
  use_birthdate: {
    type: DataType.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  use_money: {
    type: DataType.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
    },
  },
  use_privileges: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      isIn: [("A", "I")],
    },
  },
});

module.exports = {
  create: async function (user) {
    const userNew = await UserModel.create(user);
    return userNew;
  },
  read: async function () {
    return UserModel.findAll();
  },
  update: async function (cpf, user) {
    const userUpdate = await UserModel.update(user, {
      where: {
        use_cpf: cpf,
      },
    });
  },
  delete: async function (cpf) {
    const userDelete = await UserModel.destroy({
      where: {
        use_cpf: cpf,
      },
    });
  },
  readByPK: async function (cpf) {
    const user = await UserModel.findOne({
      where: {
        use_cpf: cpf,
      },
    });
    return user;
  },
};