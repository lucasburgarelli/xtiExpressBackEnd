const SellModel = require("../models/sell")
const UserModel = require("../models/user")
const StockModel = require("../models/stock")
const {sucess, fail} = require("../helpers/response")


exports.post = async(req, res, next) => {
    try{
        let sell = await SellModel.create(req.body)
        res.status(201).json(sucess(sell))
      }catch(err){
        res.status(400).json(fail(err.message.split(",\n")));
      }
}

exports.postSell = async (req, res, next) => {
    try {
        let sell = await SellModel.readByPk(req.query.cpf, req.body.code, req.query.date, req.query.time)
        let userMoney = await UserModel.readByPK(req.query.cpf).use_money
        let stockPrice = await StockModel.readByPK(req.body.code).sto_price
        let quantity = req.query.quantity
        
        if(use_money >= (sto_price * quantity)) 
            res.status(400).json(fail("User money not enough."))
        else{
            let sell = await SellModel.create({
                use_cpf: req.query.cpf,
                sto_code: req.body.code,
                sel_amount: quantity,
                sel_mediumprice: stockPrice
            })
            if(!sell) res.status(400).json(fail(sell))
            else res.status(201).json(sucess(sell))
    }
    } catch (err) {
        res.status(400).json(fail(err.message.split(",\n")))
    }
}

exports.get = async (req, res, next) => {
    try{
        let sell = await SellModel.read()
        if(!sell) res.status(404).json(fail(sell))
        else res.status(200).json(sucess(sell))
    }catch(err){
        res.status(400).json(fail(err.message.split(",\n")));
    }
}

exports.getByCode = async (req, res, next) => {
    try{
        let sell = await SellModel.readByCode(req.query.cpf, req.query.code, req.query.date, req.query.time)
        if(!sell) res.status(404).json(fail(sell))
        else res.status(200).json(sucess(sell))
    }catch(err){
        res.status(400).json(fail(err.message.split(",\n")));
    }
}

exports.put = async (req, res, next) => {
    try{
        let sell = await SellModel.update(req.query.cpf, req.query.code, req.query.date, req.query.time, req.body)
        if(!sell) res.status(404).json(fail(sell))
        else res.status(200).json(sucess(sell))
    }catch(err){
        res.status(400).json(fail(err.message.split(",\n")));
      }
}

exports.delete = async (req, res, next) => {
    try{
        let sell = await SellModel.delete(req.query.cpf, req.query.code, req.query.date, req.query.time)
        if(!sell) res.status(404).json(fail(sell))
        else res.status(200).json(sucess(sell))
    }catch(err){
        res.status(400).json(fail(err.message.split(",\n")));
      }
}