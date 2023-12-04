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

module.exports = {
    create: async function(){

    },
    read: async function(){

    },
    update: async function(){

    },
    delete: async function(){

    }
}

