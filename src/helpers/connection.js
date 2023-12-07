const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
    dialectOptions: {},
    define: {
      timestamps: false
    }
  })


sequelize.authenticate()
  .then(() => console.log("Conectado"))
  .catch(e => console.log(e))

module.exports = sequelize;