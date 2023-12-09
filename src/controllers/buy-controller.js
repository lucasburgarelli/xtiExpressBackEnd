const BuyModel = require("../models/Buy");
const { sucess, fail } = require("../helpers/response");

exports.post = async (req, res, next) => {
  let buy = await BuyModel.create(req.body);
  if (!buy) res.status(403).json(fail(buy));
  else res.status(200).json(sucess(buy));
};

exports.get = async (req, res, next) => {
  let buy = await BuyModel.read();
  if (!buy) res.status(404).json(fail(buy));
  else res.status(200).json(sucess(buy));
};

exports.getByCode = async (req, res, next) => {
  let buy = await BuyModel.readByCode(req.params.code);
  if (!buy) res.status(404).json(fail(buy));
  else res.status(200).json(sucess(buy));
};

exports.put = async (req, res, next) => {
  let buy = await BuyModel.update(req.params.code, req.body);
  if (!buy) res.status(404).json(fail(buy));
  else res.status(200).json(sucess(buy));
};

exports.delete = async (req, res, next) => {
  let buy = await BuyModel.delete(req.params.code);
  if (!buy) res.status(404).json(fail(buy));
  else res.status(200).json(sucess(buy));
};
