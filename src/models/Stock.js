const {DataTypes, Op} = require("sequelize")
const sequelize = require("../helpers/connection")

const StockModel = sequelize.define("Stock",
    {
        sto_code: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        sto_companyname: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        sto_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        sto_sector: {
            type: DataTypes.STRING
        },
        sto_firstdate: {
            type: DataTypes.DATE
        }
    }
)

// TODO Foreign keys

module.exports = {
    create: async function(stock){

    },
    read: async function(){

    },
    update: async function(code, stock){

    },
    delete: async function(code){

    }
}
