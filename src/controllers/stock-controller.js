
const StockModel = require("../models/stock")
const {sucess, fail} = require("../helpers/response")



exports.get = (req, res, next) => {
    res.status(200).json(sucess(StockModel.read()))
}

exports.getByCode = (req, res, next) => {
    const stock = StockModel.read()
    if(!stock) res.status(404).json(fail(stock))
    res.status(200).json(sucess(stock))
}

