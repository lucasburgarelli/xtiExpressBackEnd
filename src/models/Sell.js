const {DataTypes, Op} = require("sequelize")
const sequelize = require("../helpers/connection")


const SellModel = sequelize.define("Sell", 
{
    use_cpf: { 
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    sto_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    sel_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sel_mediumprice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    sel_date: {
        type: DataTypes.DATE,
        primaryKey: true,
        allowNull: false
    },
    sel_time: {
        type: DataTypes.TIME,
        primaryKey: true,
        allowNull: false
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

