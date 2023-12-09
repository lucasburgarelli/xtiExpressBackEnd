const SellModel = require("../models/sell")
const {sucess, fail} = require("../helpers/response")


exports.post = async(req, res, next) => {
    let sell = await SellModel.create(req.body)
    if(!sell) res.status(403).json(fail(sell))
    else res.status(200).json(sucess(sell))
}

exports.get = async (req, res, next) => {
    let sell = await SellModel.read()
    if(!sell) res.status(404).json(fail(sell))
    else res.status(200).json(sucess(sell))
}

exports.getByCode = async (req, res, next) => {
    let sell = await SellModel.readByCode(req.query.cpf, req.query.code, req.query.date, req.query.time)
    if(!sell) res.status(404).json(fail(sell))
    else res.status(200).json(sucess(sell))
}

exports.put = async (req, res, next) => {
    let sell = await SellModel.update(req.query.cpf, req.query.code, req.query.date, req.query.time, req.body)
    if(!sell) res.status(404).json(fail(sell))
    else res.status(200).json(sucess(sell))
}

exports.delete = async (req, res, next) => {
    let sell = await SellModel.delete(req.query.cpf, req.query.code, req.query.date, req.query.time)
    if(!sell) res.status(404).json(fail(sell))
    else res.status(200).json(sucess(sell))
}