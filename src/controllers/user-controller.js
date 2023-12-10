const UserModel = require("../models/user");
const { sucess, fail } = require("../helpers/response");

exports.post = async (req, res, next) => {
  try {
    let user = await UserModel.create(req.body);
    if (!user) res.status(403).json(fail(user));
    else res.status(200).json(sucess(user));
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
    let user = await UserModel.readByPk(req.params.cpf);
    if (!user) res.status(404).json(fail(user));
    else res.status(200).json(sucess(user));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getLogin = async (req, res, next) => {
  try {
    let user = await UserModel.readLogin(req.params.cpf, req.params.password);
    if (!users) res.status(401).json(fail("CPF or password wrong"));
    else res.status(200).json(sucess(users));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.put = async (req, res, next) => {
  try {
    let user = await UserModel.update(req.params.cpf, req.body);
    if (!user) res.status(404).json(fail(user));
    else res.status(200).json(sucess(user));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try {
    let user = await UserModel.delete(req.params.cpf);
    if (!user) res.status(404).json(fail(user));
    else res.status(200).json(sucess(user));
  } catch (err) {
    res.status(400).json(fail(err.message.split(",\n")));
  }
};
