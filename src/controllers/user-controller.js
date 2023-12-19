const { sucess, fail } = require("../helpers/response");
const UserModel = require("../models/user");
const auth = require("../helpers/authenticator");
const validator = require("../validators/user-validator");
const pagValidator = require("../validators/pagination-validatior");


exports.post = async (req, res, next) => {
  try {
    await validator.userSchema.validateAsync(req.query)
    let user = await UserModel.create({
      use_cpf: req.query.cpf,
      use_name: req.query.name,
      use_password: req.query.password,
      use_birthdate: req.query.birthdate,
      use_money: req.query.money,
      use_privileges: req.query.privileges,
    });
    res.status(201).json(sucess(user));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try {
    let users = await UserModel.read();
    if (!users) res.status(404).json(fail(users));
    else res.status(200).json(sucess(users));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try {
    await validator.cpfSchema.validate(req.params.cpf)
    let user = await UserModel.readByPk(req.params.cpf);
    if (!user) res.status(404).json(fail(user));
    else res.status(200).json(sucess(user));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getLogin = async (req, res, next) => {
  try {
    await validator.loginSchema.validateAsync(req.query)

    let user = await UserModel.readLogin(req.query.cpf, req.query.password);
    if (!user){
      res.status(401).json(fail("CPF or password wrong"));
      return;
    }

    let token = auth.autorizate(user.use_cpf, user.use_privileges)
    res.status(200).json(sucess(token));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try {
    await pagValidator.paginationSchema.validateAsync(req.query)
    let stocks = await UserModel.readPagination(
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
    await validator.cpfSchema.validateAsync(req.params)
    await validator.userSchema.validateAsync(req.query)
    let user = await UserModel.update(req.params.cpf, {
      use_cpf: req.query.cpf,
      use_name: req.query.name,
      use_password: req.query.password,
      use_birthdate: req.query.birthdate,
      use_money: req.query.money,
      use_privileges: req.query.privileges,
    });
    if (!user) res.status(404).json(fail(user));
    else res.status(200).json(sucess(user));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    await validator.cpfSchema.validateAsync(req.params)
    let user = await UserModel.delete(req.params.cpf);
    if (!user) res.status(404).json(fail(user));
    else res.status(200).json(sucess(user));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};
