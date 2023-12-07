
const StockModel = require("../models/stock")
const {sucess, fail} = require("../helpers/response")



exports.get = async (req, res, next) => {
    let stocks = await StockModel.read()
    res.status(200).json(sucess(stocks))
}

exports.getByCode = async (req, res, next) => {
    const stock = await StockModel.read()
    if(!stock) res.status(404).json(fail(stock))
    res.status(200).json(sucess(stock))
}

