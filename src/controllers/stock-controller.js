const StockModel = require("../models/stock");
const { sucess, fail } = require("../helpers/response");

exports.post = async (req, res, next) => {
  try{
    let stock = await StockModel.create(req.body);
    res.status(201).json(sucess(stock));
  }catch(err){
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.get = async (req, res, next) => {
  try{
    let stocks = await StockModel.read();
    if (!stocks) res.status(404).json(fail(stocks));
    else res.status(200).json(sucess(stocks));
  }catch(err){
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getByCode = async (req, res, next) => {
  try{
    let stock = await StockModel.readByCode(req.params.code);
    if (!stock) res.status(404).json(fail(stock));
    else res.status(200).json(sucess(stock));
  }catch(err){
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.getPagination = async (req, res, next) => {
  try{
    let stocks = await StockModel.readPagination(req.params.limit, req.params.offset);
    if (!stocks) res.status(404).json(fail(stocks));
    else res.status(200).json(sucess(stocks));
  }catch(err){
    res.status(400).json(fail(err.message.split(",\n")));
  }
}

exports.put = async (req, res, next) => {
  try{
    let stock = await StockModel.update(req.params.code, req.body);
    if (!stock) res.status(404).json(fail(stock));
    else res.status(200).json(sucess(stock));
  }catch(err){
    res.status(400).json(fail(err.message.split(",\n")));
  }
};

exports.delete = async (req, res, next) => {
  try{
    let stock = await StockModel.delete(req.params.code);
    if (!stock) res.status(404).json(fail(stock));
    else res.status(200).json(sucess(stock));
  }catch(err){
    res.status(400).json(fail(err.message.split(",\n")));
  }
};
