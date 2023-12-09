const UserModel = require("../models/user");
const { sucess, fail } = require("../helpers/response");

exports.post = async (req, res, next) => {
  let user = await UserModel.create(req.body);
  if (!user) res.status(403).json(fail(user));
  else res.status(200).json(sucess(user));
};

exports.get = async (req, res, next) => {
  let users = await UserModel.read();
  if (!users) res.status(404).json(fail(users));
  else res.status(200).json(sucess(users));
};

exports.getByCode = async (req, res, next) => {
  let user = await UserModel.readByCode(req.params.cpf);
  if (!user) res.status(404).json(fail(user));
  else res.status(200).json(sucess(user));
};

exports.put = async (req, res, next) => {
  let user = await UserModel.update(req.params.cpf, req.body);
  if (!user) res.status(404).json(fail(user));
  else res.status(200).json(sucess(user));
};

exports.delete = async (req, res, next) => {
  let user = await UserModel.delete(req.params.cpf);
  if (!user) res.status(404).json(fail(user));
  else res.status(200).json(sucess(user));
};
