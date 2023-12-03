const {DataTypes, Op} = require("sequelize")
const sequelize = require("../helpers/connection")

const StockModel = sequelize.define("Stock",
    {
        sto_code: {
            type: DataTypes.STRING,
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

module.exports = {
    list: async function(){

    },
    save: async function(stock){

    },
    update: async function(code, stock){

    },
    delete: async function(code){

    },
}
