const {DataTypes, Op} = require("sequelize")
const sequelize = require("../helpers/connection")


const SellModel = sequelize.define("Sell", 
{
    use_cpf: { 
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: true,
            len: {
                args:[11,11],
                msg: "CPF must have 11 characters"
            }
        }
    },
    sto_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: true,
            len: {
                args:[0,11],
                msg: "Stock code out of range"
            }
        }
    },
    sel_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true,
            isInt: true
        }
    },
    sel_mediumprice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notNull: true,
            isDecimal: true
        }
    },
    sel_date: {
        type: DataTypes.DATE,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: true,
            isDate: true
        }
    },
    sel_time: {
        type: DataTypes.TIME,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: true,
            isTime: true
        }
    }
}
)

// TODO Foreign keys

module.exports = {
    create: async function(sell){

    },
    read: async function(){

    },
    update: async function(cpf, code, date, time, sell){

    },
    delete: async function(cpf, code, date, time){

    }
}

