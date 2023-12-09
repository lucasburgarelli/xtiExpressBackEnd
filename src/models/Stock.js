const {DataTypes, Op} = require("sequelize")
const sequelize = require("../helpers/connection")

const StockModel = sequelize.define("Stock",
    {
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
        sto_companyname: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: true,
                len: {
                    args:[0,255],
                    msg: "Stock company name is bigger than 255"
                }
            }
        },
        sto_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notNull: true,
                isDecimal: true
            }
        },
        sto_sector: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args:[0,100],
                    msg: "Stock sector name is bigger than 100"
                }
            }
        },
        sto_firstdate: {
            type: DataTypes.DATE,
            validate: {
                isDate: true
            }
        }
    }
)

module.exports = {
    create: async function(stock){
        await console.log(stock)
        const stockNew = await StockModel.create(stock)
        return stockNew
    },
    read: async function(){
        return await StockModel.findAll()
    },
    update: async function(code, stock){
        await StockModel.update(stock,
            {
                where: {
                    sto_code: code
                }
        })

        return stock
    },
    delete: async function(code){
        const stockDeleted = await StockModel.destroy({
            where:{
                sto_code: code
            }
        })
        return stockDeleted
    },
    readByCode: async function(code){
        return await StockModel.findByPk(code)
    }
}
