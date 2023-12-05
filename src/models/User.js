const { DataTypes, Op } = require("sequelize");
const sequelize = require("../helpers/connection");

//TODO check(use_privileges in ('A','I', 'F'))

const USerModel = sequelize.define("User", {
  use_cpf: {},
  use_name: {},
  use_password: {},
  use_birthdate: {},
  use_money: {},
  use_privileges: {},
});

module.exports = {
  create: async function (user) {},
  read: async function () {},
  update: async function (cpf, name, money, birthdate) {},
  delete: async function (cpf, name, money, birthdate) {},
};
