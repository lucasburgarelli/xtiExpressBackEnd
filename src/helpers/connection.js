
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    dialectOptions: {
      // Your mysql2 options here
    }
  });


module.exports = connection;